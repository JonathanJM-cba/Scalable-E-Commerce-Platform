import app from "./app";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.connection";

dotenv.config();

const PORT = process.env.PORT || 6001;

/*
app.listen(PORT, () => {
  console.log(`Servicio de usuarios corriendo en: http://localhost:${PORT}`);
});
*/

const startServer = async () => {
  const connected = await dbConnection();

  if (connected) {
    app.listen(PORT, () => {
      console.log(
        `Servicio de usuarios corriendo en: http://localhost:${PORT}`
      );
    });
  } else {
    console.log("Error al iniciar el servidor de usuarios");
  }
};

startServer();
