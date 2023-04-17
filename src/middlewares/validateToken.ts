import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'abobrinha';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.body.user = payload;

    return next();
  } catch (e) {
    return res.status(401).send({ message: 'Invalid token' });
  }
};

export default validateToken;