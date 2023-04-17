import { RowDataPacket } from 'mysql2';
import connection from './connection';

interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

const listOrders = async (): Promise<Order[]> => {
  const [request] = await connection.execute<RowDataPacket[] & Order[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p 
      ON o.id = p.order_id
      GROUP BY o.id;`,
  );
  return request;
};

export default {
  listOrders,
};