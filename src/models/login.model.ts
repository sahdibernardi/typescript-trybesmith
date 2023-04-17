import { RowDataPacket } from 'mysql2';
import connection from './connection';

interface Login {
  username: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

const newLogin = async (login: Login): Promise<User[]> => {
  const { username, password } = login;

  const [rows] = await connection.execute<RowDataPacket[] & Login[]>(
    `
        SELECT username, password FROM Trybesmith.users WHERE username = ? AND password = ?;
      `,
    [username, password],
  );
  return rows as User[];
};

export default { newLogin };