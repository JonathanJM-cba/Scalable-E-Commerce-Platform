//Se registrar los servicios en el contenedor de inyeccion de dependencias
import { container } from "tsyringe";

import { IUserRepository } from "../repositories/interfaces/user.interface";
import { UserRepositoryImpl } from "../repositories/implementations/user.repository.impl";
import { IUserService } from "../services/interfaces/user.service.interfaz";
import { UserSerivceImpl } from "../services/implementations/user.service.impl";

container.register<IUserRepository>("IUserRepository", {
  useClass: UserRepositoryImpl,
});

container.register<IUserService>("IUserService", {
  useClass: UserSerivceImpl,
});
