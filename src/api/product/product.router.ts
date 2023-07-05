import { Router } from "express";
import { list, get } from './product.controller';


const router = Router();

router.get('/', list);
router.get('/:id', get);


export default router;