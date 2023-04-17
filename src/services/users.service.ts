import usersModel from '../models/users.model';
import generateJWT from '../helpers/generateJWT';

interface User {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

const newUser = async (user: User) : Promise<string> => {
  const token = await generateJWT(user);
  const model = await usersModel.newUser(user);
  console.error(model);
  return token;
};

export default {
  newUser,
};