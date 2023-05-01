import { DataSource } from 'typeorm';
import { Client } from './entities/client';
import { Banker } from './entities/banker';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "130786",
    database: 'TypeScript ORM',
    entities: [Client,Banker],
    synchronize: true
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.log(`Error during Data Source initialization ${err}`);
})

