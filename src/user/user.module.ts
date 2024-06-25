import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProvider } from './user.provider';
import { UserEntity } from './entities/user.entity';
import { DatabaseModule } from 'src/database/database.module';
import { EntityManager } from 'typeorm';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProvider, UserService, UserEntity, EntityManager],
})
export class UserModule {}
