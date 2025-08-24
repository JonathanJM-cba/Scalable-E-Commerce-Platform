import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IUserService } from "../services/interfaces/user.service.interfaz";
import { User } from "../entities/user.entity";
import { handleHttpError } from "../utils/handle.http.error";
import { RegisterUserDTO, ResponseUserDTO } from "../dtos/user.dto";
import { hashPassword } from "../utils/handle.password";

@injectable()
export class AuthController {
  // Implementación de los métodos del controlador de autenticación

  constructor(@inject("IUserService") private userService: IUserService) {}

  public register = async (req: Request, res: Response): Promise<void> => {
    // Lógica para registrar un usuario
    const { username, email, password } = req.body;

    try {
      //Se verifica si no existe un usuario con el mismo username o email
      //Se verifica por username
      const userName: User | null = await this.userService.getUserByUsername(
        username
      );
      if (userName) {
        handleHttpError(res, "ERROR_USER_EXIST", 400);
      }

      //Se verifica por email
      const userEmail: User | null = await this.userService.getUserByEmail(
        email
      );
      if (userEmail) {
        handleHttpError(res, "ERROR_EMAIL_EXIST", 400);
      }

      //En caso de que no exista el usuario, se crea
      //Se encripta la contraseña
      const hashedPassword = await hashPassword(password);
      const userData: RegisterUserDTO = {
        username,
        email,
        password: hashedPassword,
      };

      const newUser: ResponseUserDTO = await this.userService.createUser(
        userData
      );

      res.status(201).json({
        message: "Usuario registrado exitosamente",
        user: { username: newUser.username, email: newUser.email },
      });
    } catch (error) {
      console.log("Error al querer registrar usuario", error);
      handleHttpError(res, "ERROR_REGISTER_USER", 500);
    }
  };
}
