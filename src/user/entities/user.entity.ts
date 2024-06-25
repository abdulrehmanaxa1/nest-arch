/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  user_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  role_id: number;

  @Column()
  password: string;

  @Column()
  created_by: number;

  @Column()
  created_at: Date;

  @Column()
  updated_by: number;

  @Column()
  updated_at: Date;

  @Column()
  is_ended: boolean;
}