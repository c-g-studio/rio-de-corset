import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const getCorsets = async (locale: string, pageSize = 12, page = 1) => {
  return await axios.get(
    `/api/corsets?locale=${locale}&populate=preview,slides,size,category&pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
    {},
  );
};

const getCorsetById = async (id: number, locale: string) => {
  return await axios.get(
    `/api/corsets/${id}?locale=${locale}&populate=preview,slides,size,category`,
  );
};

const getShirts = async (locale: string, pageSize = 6, page = 1) => {
  return await axios.get(
    `/api/shirts?locale=${locale}&populate=preview,slides,size,category&pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
  );
};

const getShirtById = async (id: number, locale: string) => {
  return await axios.get(
    `/api/shirts/${id}?locale=${locale}&populate=preview,slides,size,category`,
  );
};

export const productsAPI = {
  getCorsets,
  getCorsetById,
  getShirts,
  getShirtById,
};
