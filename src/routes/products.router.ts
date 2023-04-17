import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.newProduct);
productsRouter.get('/', productsController.listProducts);

export default productsRouter;