/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { DatabaseProviders } from './database.providers';

@Global()
@Module({
    imports: [],
    providers: [...DatabaseProviders],
    exports: [...DatabaseProviders]
})
export class DatabaseModule {}
