import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const port = process.env.PORT || 6000;

const app: Express = express();

//Middlewares de seguridad
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

/**
 * Luego se definir cada uno de los microservicios
 */

app.listen(port, () => {
  console.log(`API Gateway is running in http://localhost:${port}`);
});
