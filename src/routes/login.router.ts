import { Router } from 'express';
import validateJWT from '../middlewares/validateJWT';
import loginController from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.post('/', validateJWT, loginController.newLogin);

export default loginRouter;