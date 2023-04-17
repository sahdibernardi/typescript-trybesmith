import productsModel from '../models/products.model';

interface Product {
  id: number;
  name: string;
  amount: string;
}

const newProduct = async (product: Product) => {
  const model = await productsModel.newProduct(product);
  return model;
};

export default { newProduct };