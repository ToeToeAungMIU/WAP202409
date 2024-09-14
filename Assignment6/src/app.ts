import express, { Request, Response, NextFunction } from 'express';
import userRouters from '../router/users'
import productRouters from '../router/products';

const app = express();
app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Home Page</h1>');
});

app.use('/users', userRouters);
app.use('/products', productRouters);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile('404.html', { root: 'views' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).sendFile('500.html', { root: 'views' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
