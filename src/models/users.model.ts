import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

interface User {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

const getUserId = async (user: string) => {
  const id = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.users WHERE username = ?',
    [user],
  );
  return id;
};

const newUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

export default {
  newUser,
  getUserId,
};