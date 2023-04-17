import { Request, Response } from 'express';
import loginService from '../services/login.service';

const newLogin = async (req: Request, res: Response) => {
  const token = await loginService.newLogin(req.body);
  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return res.status(200).json({ token });
};

export default { newLogin };