import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn } from "typeorm";
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashpassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date
}

export default User;