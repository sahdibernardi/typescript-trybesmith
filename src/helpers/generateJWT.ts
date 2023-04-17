import jwt, { SignOptions } from 'jsonwebtoken';

interface User {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}
interface Login {
  username: string;
  password: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'abobrinha';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const generateJWT = (payload: User | Login) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

export default generateJWT;
