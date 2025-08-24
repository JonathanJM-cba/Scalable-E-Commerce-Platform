import { Response } from "express";

/**
 * Función para manejar errores HTTP y enviar una respuesta con el código y mensaje adecuado.
 * @param res - Response de Express
 * @param message - Mensaje de error
 * @param code - Código de estado HTTP (por defecto 400)
 * @returns - Respuesta HTTP con el mensaje de error y código de estado en formato JSON
 */
export const handleHttpError = (
  res: Response,
  message: string,
  code: number = 400
) => {
  return res.status(code).json({ message });
};
