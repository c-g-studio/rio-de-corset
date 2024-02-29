import { useEffect, useState, useCallback } from 'react';
import { useMedia } from 'react-use';
import { ProductsAPIProps, productsAPI } from '@/services/productsAPI';

import { CorsetsDtoProps } from '@/types/corsetsDto';

type useProductListProps = {
  locale: string;
  requestType: 'shirts' | 'corsets';
};

// type CallbackProps = (
//   locale: string,
//   pageSize: number,
//   page: number,
// ) => Promise<AxiosResponse>;

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
    async (callback: ProductsAPIProps): Promise<void> => {
      setIsLoading(true);

      try {
        const { data: responseData } =
          requestType === 'shirts'
            ? await callback.getShirts(locale, pageSize, page)
            : await callback.getCorsets(locale, pageSize, page);

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
    [locale, page, pageSize, requestType],
  );

  useEffect(() => {
    (async () => {
      await fetchData(productsAPI);
    })();
  }, [fetchData, requestType]);

  return { response, isError, isLoading, totalPage, page, buttonClickHandler };
};
