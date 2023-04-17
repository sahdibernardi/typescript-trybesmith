import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts';

const productsRouter = Router();

const { nameV, amountV } = validateProducts;

productsRouter.post('/', nameV, amountV, productsController.newProduct);
productsRouter.get('/', productsController.listProducts);

export default productsRouter;