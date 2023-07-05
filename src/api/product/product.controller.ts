import { Request, Response, NextFunction } from 'express';
import productService from './product.service';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const products = await productService.find();
  res.json(products);
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
  const item = await productService.getById(req.params.id);
  if (!item) {
    res.status(404);
    res.send();
    return;
  }
  res.json(item);
}