import { Router } from "express";
import { isAuthenticated } from "../../utils/auth/authenticated.middleware";
import { me } from "./user.controller";

const router = Router();

router.get("/me", isAuthenticated, me);

export default router;
