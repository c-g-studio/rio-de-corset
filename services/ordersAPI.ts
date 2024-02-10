import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:1337';

interface IOrderItem {
  name: string;
  size: string;
  price: string;
}

interface IWorldOrderDto {
  data: {
    name: string;
    number: string;
    email: string;
    country: string;
    city: string;
    address: string;
    index: number;
    order_info: IOrderItem[];
  };
}

interface IUkraineOrderDto {
  data: {
    name: string;
    number: string;
    email: string;
    city: string;
    delivery_method: string;
    department_number: string;
    order_info: IOrderItem[];
  };
}

const addUkraineOrder = async (data: IUkraineOrderDto) => {
  return await axios.post('/api/ukraine-orders', data);
};

const addWorldOrder = async (data: IWorldOrderDto) => {
  return await axios.post('/api/world-orders', data);
};

export const ordersAPI = { addUkraineOrder, addWorldOrder };
