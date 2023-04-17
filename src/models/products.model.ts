import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

interface Product {
  id: number;
  name: string;
  amount: string;
}
interface Order extends Product {
  orderId: number;
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

const listProducts = async (): Promise<Order[]> => {
  const [list] = await connection.execute<RowDataPacket[] & Order[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return list;
};

const newOrderId = async (order:number, e:number) => {
  await connection.execute('UPDATE Trybesmith.products SET order_id= ?  WHERE id = ?', [order, e]);
};

export default { 
  newProduct,
  listProducts,
  newOrderId,
};