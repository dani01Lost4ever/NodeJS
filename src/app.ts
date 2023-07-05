import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './api/routes';
import bodyParser from 'body-parser';
import { notFoundHandler } from './errors/not-found';
import { errorHandler } from './errors/generic';
import { validationErrorHandler } from './errors/validationError';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(validationErrorHandler)
export default app;
