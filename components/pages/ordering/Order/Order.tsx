'use client';

import { Form } from '@/components/common/Form';
import { FC, useEffect, useState } from 'react';
import { Products } from '../OrderList/OrderList';
import { shoppingCardService } from '@/services/shoppingCardService';
import { productsAPI } from '@/services/productsAPI';
import { TotalPrice } from '../TotalPrice/TotalPrice';
import { corsetAttributes } from '@/types/сorsetAttributes';

type OrderProps = {
  locale: 'uk' | 'en';
};

type ProductState = {
  category: string;
  id: number;
  name: string;
  price: number;
  size: string;
  preview: string;
};

const createProductArray =
  (locale: 'en' | 'uk', category: string) =>
  (item: { data: { data: { id: number; attributes: corsetAttributes } } }) => ({
    category,
    id: item.data.data.id,
    name: item.data.data.attributes[`name_${locale}`],
    price: item.data.data.attributes[`price_${locale}`],
    size: item.data.data.attributes.size.data.attributes.size_abbr,
    preview: item.data.data.attributes.preview.data.attributes.url,
  });

export const Order: FC<OrderProps> = ({ locale }) => {
  const [products, setProducts] = useState<ProductState[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const orders = shoppingCardService.getProducts();
      const corsets = await Promise.all(
        orders.corsets.map((id: number) => productsAPI.getCorsetById(id, 'uk')),
      );
      const shirts = await Promise.all(
        orders.shirts.map((id: number) => productsAPI.getShirtById(id, 'uk')),
      );
      const corsetsArray = corsets.map(createProductArray(locale, 'corsets'));
      const shirtsArray = shirts.map(createProductArray(locale, 'shirts'));
      const productsArray = [...corsetsArray, ...shirtsArray];

      setProducts(productsArray);
    })();
  }, [locale]);

  useEffect(() => {
    const total = products.reduce(
      (accumulator, item) => (accumulator += item.price),
      0,
    );
    setTotalPrice(total);
  }, [products]);

  const deleteProduct = (category: string, id: number, index: number) => {
    shoppingCardService.deleteProducts(id, category);
    setProducts(previousState =>
      previousState.filter((item, index_) => index_ !== index),
    );
  };

  return (
    <div className="relative lg:flex lg:max-h-[600px] lg:justify-between lg:overflow-hidden ">
      <Form totalPrice={totalPrice} products={products} />
      <Products
        locale={locale}
        products={products}
        deleteProduct={deleteProduct}
      />
      <TotalPrice total={totalPrice} locale={locale} />
    </div>
  );
};
