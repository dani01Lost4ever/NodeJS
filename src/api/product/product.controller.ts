import { Request, Response, NextFunction } from 'express';
import productService from './product.service';
import { TypedRequest } from '../../utils/typed-request.interface';
import { QueryProductDTO } from './product.dto';
import { NotFoundError } from '../../errors/not-found';


export const list = async (req: TypedRequest<any, QueryProductDTO>,
  res: Response,
  next: NextFunction) => {
const products = await productService.find(req.query);
res.json(products);
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
  const item = await productService.getById(req.params.id);
  if (!item) {
    throw new NotFoundError();
  }
  res.json(item);
}

export const gen = async (req: Request, res: Response,)=> {
  const num = req.query?.num;
  if (num === undefined) {
    res.status(400).json({ error: 'Missing "num" parameter' });
    return;
  }
  const numValue = parseInt(num as string, 10);
  if (isNaN(numValue) || numValue <= 0) {
    res.status(400).json({ error: 'Invalid "num" parameter' });
    return;
  }
  const items = await productService.generate(numValue);
  console.log(items);
  res.status(200).json(items);
}