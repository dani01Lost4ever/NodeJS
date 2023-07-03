import { Router } from "express";
import { add, list, remove, updateQuantity } from "./cart-item.controller";


const router = Router();

router.get('/', list)
router.post('/', add)
router.patch('/:id', updateQuantity)
router.delete('/:id', remove)


export default router;