export type Inputs = Record<string, object>;

export type ProductProps = {
  category: string;
  id: number;
  name: string;
  price: number;
  size: string;
  preview: string;
};

export type FormProps = {
  totalPrice: string;
  products: ProductProps[];
};
