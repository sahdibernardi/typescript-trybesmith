import { Request, Response } from 'express';
import usersService from '../services/users.service';

const newUser = async (req: Request, res: Response) => {
  const token = await usersService.newUser(req.body);
  return res.status(201).json({ token });
};

export default {
  newUser,
};