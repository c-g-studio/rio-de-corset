import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:1337';

const getCorsets = async () => {
  return await axios.get(`/api/corsets?populate=preview,slides`);
};

const getCorsetById = async (id: number) => {
  return await axios.get(`/api/corsets/${id}?populate=preview,slides`);
};

const getShirts = async () => {
  return await axios.get(`/api/shirts?populate=preview,slides`);
};

const getShirtById = async (id: number) => {
  return await axios.get(`/api/shirts/${id}?populate=preview,slides`);
};

export const productsAPI = {
  getCorsets,
  getCorsetById,
  getShirts,
  getShirtById,
};
