"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const client_1 = require("./entities/client");
const banker_1 = require("./entities/banker");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: "130786",
    database: 'TypeScript ORM',
    entities: [client_1.Client, banker_1.Banker],
    synchronize: true
});
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.log(`Error during Data Source initialization ${err}`);
});
//# sourceMappingURL=index.js.map