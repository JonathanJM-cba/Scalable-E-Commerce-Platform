import express, { Express, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import authRoute from "./routes/auth.route";
//import indexRoute from "./routes";

const app: Express = express();

app.use(helmet());
app.use(morgan("dev"));

// Middleware para ver qué rutas llegan
app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
});

app.get("/", (_, res: Response) => {
  res.send("Bienveido al microservicio de autenticación de usuarios");
});

app.use("/", authRoute);

export default app;
