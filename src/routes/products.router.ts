import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middlewares/validateProducts';

const productsRouter = Router();

productsRouter.post(
  '/',
  validateProducts.nameValidation,
  validateProducts.amountValidation,
  productsController.newProduct,
);
productsRouter.get('/', productsController.listProducts);

export default productsRouter;