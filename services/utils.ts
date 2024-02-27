import axios, { AxiosInstance } from 'axios';

export const baseInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });
};
