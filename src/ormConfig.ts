import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "sqlite",
    database: "data/data.db",
    synchronize: true,
    entities: [
        "entities/**/*.*"
    ],
    logging: true
};

export default connectionOptions;