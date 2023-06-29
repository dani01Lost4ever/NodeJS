import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { cart } from './cart';

const app = express();

app.use(cors());

app.use(morgan('tiny'));

app.get('/api/cart-items', (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.json(cart);
}); 

app.listen(3000, () => console.log('Server started on port 3000'));