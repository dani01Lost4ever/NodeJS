import { Router } from "express";
import { list, get, gen } from './product.controller';


const router = Router();

router.get('/', list);
router.get('/:id', get);
router.post('/gen', gen);

export default router;