import { IUserRepository } from "../interfaces/user.interface";
import { injectable, inject } from "tsyringe";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../config/db.connection";
import { RegisterUserDTO } from "../../dtos/user.dto";

@injectable()
export class UserRepositoryImpl implements IUserRepository {
  private userRepo: Repository<User>;

  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  public findAll = async (): Promise<User[]> => {
    return await this.userRepo.find();
  };

  public findById = async (id: number): Promise<User | null> => {
    return await this.userRepo.findOneBy({ id });
  };

  public findByUsername(username: string): Promise<User | null> {
    return this.userRepo.findOneBy({ username });
  }

  public findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOneBy({ email });
  }

  public create(user: User): Promise<User> {
    const newUser = this.userRepo.create(user);
    return this.userRepo.save(newUser);
  }
}
