import { injectable, inject } from "tsyringe";
import { User } from "../../entities/user.entity";
import { IUserService } from "../interfaces/user.service.interfaz";
import { IUserRepository } from "../../repositories/interfaces/user.interface";
import { RegisterUserDTO, ResponseUserDTO } from "../../dtos/user.dto";

@injectable()
export class UserSerivceImpl implements IUserService {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  getUserById(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  getUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findByUsername(username);
  }

  getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  createUser = async (userDTO: RegisterUserDTO): Promise<ResponseUserDTO> => {
    const user = new User();
    user.username = userDTO.username;
    user.email = userDTO.email;
    user.password = userDTO.password;
    const newUser = await this.userRepository.create(user);
    //const newUser = await this.userRepository.save(createdUser);
    return { username: newUser.username, email: newUser.email };
  };
}
