import { Request, Response, NextFunction } from 'express';

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const { password, username } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  next();
};

export default validateJWT;