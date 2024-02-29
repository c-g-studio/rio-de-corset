import { AxiosInstance, AxiosResponse } from 'axios';
import { baseInstance } from './utils';

export const productsAPI = {
  client: baseInstance(),

  getCorsets: async function (locale: string, pageSize = 12, page = 1) {
    return await this.client.get(
      `/api/corsets?locale=${locale}&populate=preview,slides,size,category&pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
      {},
    );
  },

  getCorsetById: async function (id: number, locale: string) {
    return await this.client.get(
      `/api/corsets/${id}?locale=${locale}&populate=preview,slides,size,category`,
    );
  },

  getShirts: async function (locale: string, pageSize = 6, page = 1) {
    return await this.client.get(
      `/api/shirts?locale=${locale}&populate=preview,slides,size,category&pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
    );
  },

  getShirtById: async function (id: number, locale: string) {
    return await this.client.get(
      `/api/shirts/${id}?locale=${locale}&populate=preview,slides,size,category`,
    );
  },
};

export type ProductsAPIProps = {
  client: AxiosInstance;
  getCorsets: (
    locale: string,
    pageSize?: number,
    page?: number,
  ) => Promise<AxiosResponse>;
  getCorsetById: (id: number, locale: string) => Promise<AxiosResponse>;
  getShirts: (
    locale: string,
    pageSize?: number,
    page?: number,
  ) => Promise<AxiosResponse>;
  getShirtById: (id: number, locale: string) => Promise<AxiosResponse>;
};
