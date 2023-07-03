import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './api/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});