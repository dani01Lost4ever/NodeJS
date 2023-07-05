import { Types } from 'mongoose';
import { Product } from '../product/product.entity';

export interface CartItem {
  id?: string;
  product: Types.ObjectId | string | Product;
  quantity: number;
}