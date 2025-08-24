import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    unique: true,
    nullable: false,
    length: 50,
  })
  username: string;

  @Column({
    type: "varchar",
    unique: true,
    nullable: false,
    length: 50,
  })
  email: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 100,
  })
  password: string;

  @CreateDateColumn({
    type: "timestamptz",
    nullable: false,
    default: () => "NOW()",
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamptz",
    nullable: false,
    default: () => "NOW()",
  })
  updatedAt: Date;
}
