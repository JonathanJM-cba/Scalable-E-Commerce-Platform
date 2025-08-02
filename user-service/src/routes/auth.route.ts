import express, { Express, Router, Response } from "express";

const router: Router = express.Router();

router.get("/login", (_, res: Response) => {
  res.json({ message: "Sesión inicada con éxito" });
});

router.get("/register", (_, res: Response) => {
  res.json({ message: "Registro de usuario (simulado)" });
});

export default router;
