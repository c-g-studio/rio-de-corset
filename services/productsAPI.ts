import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:1337';

const getCorsets = async (locale: string, pageSize = 12) => {
  return await axios.get(
    `/api/corsets?locale=${locale}&populate=preview,slides,size,category&pagination[pageSize]=${pageSize}`,
  );
};

const getCorsetById = async (id: number, locale: string) => {
  return await axios.get(
    `/api/corsets/${id}?locale=${locale}&populate=preview,slides,size,category`,
  );
};

const getShirts = async (locale: string, pageSize = 6) => {
  return await axios.get(
    `/api/shirts?locale=${locale}&populate=preview,slides,size,category&pagination[pageSize]=${pageSize}`,
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
