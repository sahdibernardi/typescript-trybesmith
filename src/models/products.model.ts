import { ResultSetHeader } from 'mysql2';
import connection from './connection';

interface Product {
  id: number;
  name: string;
  amount: string;
}

// not using sequilize to make it simpler and easier.

const newProduct = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, name, amount };
};

export default { 
  newProduct,
};