import { baseInstance } from './utils';

export const ordersAPI = {
  client: baseInstance(),

  addUkraineOrder: async function (data: IOrderDto) {
    return await this.client.post('/api/ukraine-orders', data);
  },

  addWorldOrder: async function (data: IOrderDto) {
    return await this.client.post('/api/world-orders', data);
  },
};

export type IOrderItem = {
  name: string;
  size: string;
  price: number;
  id: number;
  preview: string;
  category: string;
};

export type IOrderDto = {
  data: OrderProps;
};

export type OrderProps = {
  name: string;
  number: string;
  email: string;
  city: string;
  total_price: string;
  order_info: IOrderItem[];
  country?: string;
  address?: string;
  index?: number;
  delivery_method?: string;
  department_number?: string;
};
