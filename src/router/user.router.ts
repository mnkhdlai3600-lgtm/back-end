import { createNewUser } from "../controllers/users";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/create-user");
