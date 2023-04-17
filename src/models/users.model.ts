import { ResultSetHeader } from 'mysql2';
import connection from './connection';

interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

const newUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

export default { newUser };