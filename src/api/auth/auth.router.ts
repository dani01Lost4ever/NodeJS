import { Router } from "express";
import { validate } from "../../utils/validation.middleware";
import { AddUserDTO, LoginDTO } from "./auth.dto";
import { add, login } from "./auth.controller";

const router = Router();

router.post("/register", validate(AddUserDTO, "body"), add);
router.post("/login", validate(LoginDTO), login);
export default router;
