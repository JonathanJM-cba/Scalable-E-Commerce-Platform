import { RegisterUserDTO } from "../../dtos/user.dto";
import { User } from "../../entities/user.entity";

export interface IUserRepository {
  findAll(): Promise<User[]>;

  findById(id: number): Promise<User | null>;

  findByUsername(username: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  create(user: User): Promise<User>;

  //update(user: Partial<User>): Promise<User>;

  //delete(id: number): void;
}
