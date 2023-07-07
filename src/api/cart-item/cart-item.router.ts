import { Router } from "express";
import { add, list, remove, updateQuantity } from "./cart-item.controller";
import { validate } from "../../utils/validation.middleware";
import { AddCartItemDTO, UpdateQuantityDTO } from "./cart-item.dto";


const router = Router();

router.get('/', list);
router.post('/', validate(AddCartItemDTO, 'body'), add);
router.patch('/:id', validate(UpdateQuantityDTO), updateQuantity);
router.delete('/:id', remove);


export default router;