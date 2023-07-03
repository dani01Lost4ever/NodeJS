import { Router } from 'express';
import cartItemRouter from './cart-item/cart-item.router';
import productRouter from './product/product.router';

const router = Router();

router.use('/cart-items', cartItemRouter);
router.use('/products', productRouter);

export default router;