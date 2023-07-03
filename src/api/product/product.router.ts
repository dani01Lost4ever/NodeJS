import { Router } from "express";
import { list, get, gen } from './product.controller';


const router = Router();
router.post('/gen', gen);
router.get('/', list);
router.get('/:id', get);


export default router;