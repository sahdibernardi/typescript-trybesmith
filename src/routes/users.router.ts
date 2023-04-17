import { Router } from 'express';
import usersController from '../controllers/users.controller';
import validateUsers from '../middlewares/validateUsers';

const {
  usernameV,
  vocationV,
  levelV,
  passwordV,
} = validateUsers;

const usersRouter = Router();

usersRouter.post('/', usernameV, vocationV, levelV, passwordV, usersController.newUser);

export default usersRouter;