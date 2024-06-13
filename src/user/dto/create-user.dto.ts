/* eslint-disable prettier/prettier */

import { IsEmail, IsString, IsInt } from "class-validator";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class CreateUserDto {
    @IsEmail()
    readonly email: string;
    
    @IsString()
    readonly name: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly confirmPassword: string;
    
    @IsInt()
    readonly phone: number;
}
