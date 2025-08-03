import express, { Express, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const port = process.env.PORT || 6000;

const app: Express = express();

//Middlewares de seguridad
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (_, res: Response) => {
  res.send("Bienvenido a la API de Plataforma E-commerce");
});

const userServiceTarget =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : process.env.USER_SERVICE_URL || "http://user-service:3001";

//User microservice
const userMicroservice = createProxyMiddleware({
  target: userServiceTarget,
  changeOrigin: true,
  pathRewrite: {
    "^/api/auth": "", // 🔥 esto es clave
  },
});

app.use("/api/auth", userMicroservice);

app.listen(port, () => {
  console.log(`API Gateway is running in http://localhost:${port}`);
});
