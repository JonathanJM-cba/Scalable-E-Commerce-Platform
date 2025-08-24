import { RegisterUserDTO } from "../../dtos/user.dto";
import { User } from "../../entities/user.entity";
import { ResponseUserDTO } from "../../dtos/user.dto";

export interface IUserService {
  getAllUsers(): Promise<User[]>;

  getUserById(id: number): Promise<User | null>;

  getUserByUsername(username: string): Promise<User | null>;

  getUserByEmail(email: string): Promise<User | null>;

  createUser(userDTO: RegisterUserDTO): Promise<ResponseUserDTO>;
}
