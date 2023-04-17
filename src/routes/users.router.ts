import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/', usersController.newUser);

export default usersRouter;