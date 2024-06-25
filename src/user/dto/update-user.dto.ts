/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsInt()
    readonly id?: number;
}
