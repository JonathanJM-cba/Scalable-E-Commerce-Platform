import express, { Express, Router, Response } from "express";
import "../di/container";
import { container } from "tsyringe";
import { AuthController } from "../controllers/auth.controller";

const router: Router = express.Router();

const authController = container.resolve(AuthController);

router.get("/login", (_, res: Response) => {
  res.json({ message: "Sesión inicada con éxito" });
});

/*
router.get("/register", (_, res: Response) => {
  res.json({ message: "Registro de usuario (simulado)" });
});
*/

router.post("/register", authController.register);

export default router;
