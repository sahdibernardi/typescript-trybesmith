import app from './app';

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

// initial commit

export default server;
