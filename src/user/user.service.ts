/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository, getManager } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


@Injectable()
export class UserService {
  
  constructor(
    @Inject('USER_REPOSITORY') private userRepsitory: Repository<UserEntity>
  ) {
  }
  
  create(createUserDto: CreateUserDto) {
    const req = createUserDto;
    const query = "CALL nest_arch.addUser()"
    console.log("Create User email:" + req.email);
    return 'This action adds a new user';
  }

  async findAll(): Promise<any> {
    try {
      const query = "CALL nest_arch.getUsers();";
      const users = await this.userRepsitory.query(query);
      // const users = await this.userRepsitory.find();
      const resp = {message: "Success", Users: users, total: users.length}
      return resp;
    } catch(e) {
      throw e;
    }
  }



  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
