/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const DatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        try{
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'nest_arch',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
              });
              await dataSource.initialize();
              console.log("DB Connected");
              return dataSource;
        }
        catch(e){

        }
    },
  },
];