import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateToken';
import productsIdsV from '../middlewares/validateOrder';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.listOrders);
ordersRouter.post('/', validateToken, productsIdsV, ordersController.newOrder);

export default ordersRouter;