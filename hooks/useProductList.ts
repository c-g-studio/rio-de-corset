import { useEffect, useState, useCallback } from 'react';
import { useMedia } from 'react-use';
import { AxiosResponse } from 'axios';

import { productsAPI } from '@/services/productsAPI';

import { CorsetsDtoProps } from '@/types/corsetsDto';

type useProductListProps = {
  locale: string;
  requestType: 'shirts' | 'corsets';
};

type CallbackProps = (
  locale: string,
  pageSize: number,
  page: number,
) => Promise<AxiosResponse>;

export const useProductList = ({
  locale,
  requestType,
}: useProductListProps) => {
  const [page, setPage] = useState<number>(1);
  const [response, setResponse] = useState<CorsetsDtoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);

  const buttonClickHandler = (): void => {
    setPage(previousState => previousState + 1);
  };
  const isDesktop = useMedia('(min-width: 1440px)', false);
  const pageSize = isDesktop ? 12 : 6;

  const fetchData = useCallback(
    async (callback: CallbackProps): Promise<void> => {
      setIsLoading(true);

      try {
        const { data: responseData } = await callback(locale, pageSize, page);

        if (page === 1) {
          setTotalPage(
            Math.ceil(responseData.meta.pagination.total / pageSize),
          );
          setResponse(responseData.data);
          return;
        }
        setResponse(previousState => [...previousState, ...responseData.data]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [locale, page, pageSize],
  );

  useEffect(() => {
    (async () => {
      if (requestType === 'shirts') {
        await fetchData(productsAPI.getShirts);
        return;
      }

      if (requestType === 'corsets') {
        await fetchData(productsAPI.getCorsets);
      }
    })();
  }, [fetchData, requestType]);

  return { response, isError, isLoading, totalPage, page, buttonClickHandler };
};
