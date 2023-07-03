import { Request, Response, NextFunction } from 'express';
import cartItemService from './cart-item.service';
import productService from '../product/product.service';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const list = await cartItemService.find();
  res.json(list);
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
  const { productId, quantity } = req.body;

  try {
    const product = await productService.getById(productId);
    if (!product) {
      res.status(404);
      res.send();
      return;
    }
    
    const newItem = {
      ...product,
      quantity
    };
    const saved = await cartItemService.add(newItem);
    res.json(saved);
  } catch(err) {
    next(err);
  }
}

export const updateQuantity = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const newQuantity = req.body.quantity;
  if (newQuantity === undefined || newQuantity < 0 || newQuantity > 10) {
    res.status(400);
    res.send("Invalid quantity");
    return;
  }

  try {
    const updated = await cartItemService.update(id, {quantity: newQuantity});
    res.json(updated);
  } catch(err: any) {
    if (err.message === 'Not Found') {
      res.status(404);
      res.send();
    } else {
      next(err);
    }
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    await cartItemService.remove(id);
    res.status(204);
    res.send();
  } catch(err: any) {
    if (err.message === 'Not Found') {
      res.status(404);
      res.send();
    } else {
      next(err);
    }
  }
}