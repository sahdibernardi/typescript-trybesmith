import express from 'express';
import productsRouter from './routes/products.router';
import usersRouter from './routes/users.router';
import ordersRouter from './routes/order.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
