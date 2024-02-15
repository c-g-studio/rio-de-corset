const LOCAL_STORAGE_KEY = 'orders';

const getProducts = () => {
  const orders = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (orders) {
    return JSON.parse(orders);
  }
  return { shirts: [], corsets: [] };
};

const addProducts = (id: number, category: string) => {
  const orders = getProducts();
  if (orders[category].includes(id)) {
    return deleteProducts(id, category);
  }
  orders[category].push(id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
};

const deleteProducts = (id: number, category: string) => {
  const orders = getProducts();
  orders[category].splice(orders[category].indexOf(id), 1);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
};

const isProductAdded = (id: number, category: string) => {
  const products = getProducts();
  return products[category].includes(id);
};

export const shoppingCardService = {
  getProducts,
  addProducts,
  deleteProducts,
  isProductAdded,
};
