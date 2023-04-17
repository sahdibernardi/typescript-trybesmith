import loginModel from '../models/login.model';
import generateJWT from '../helpers/generateJWT';

interface Login {
  username: string;
  password: string;
}

const newLogin = async (login: Login): Promise< boolean | string > => {
  const users = await loginModel.newLogin(login);
  if (users.length === 0 || users[0].password !== login.password) {
    return false;
  } 
  const token = await generateJWT(login);
  return token;
};

export default { newLogin };