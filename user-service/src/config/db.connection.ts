import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/user.entity";

dotenv.config();

const DB_PORT = process.env.DB_PORT || "5432";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;

export const AppDataSource = new DataSource({
  type: "postgres",
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT),
  host: DB_HOST,
  entities: [User],
  synchronize: true,
  logging: false,
});

export const dbConnection = async (): Promise<boolean> => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a base de datos realizada con éxito.");
    return true;
  } catch (error) {
    console.log("Error al intenat conectar a la Base de datos: ", error);
    return false;
  }
};
