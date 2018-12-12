import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
    type: "sqlite",
    database: "data/data.sqlite",
    entities: [
        "entities/**/*.*"
    ],
    logging: true
};

export default connectionOptions;