import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const user = process.env.MONGO_USERNAME || "";
const password = process.env.MONGO_PASSWORD || "";
const baseConnString = process.env.MONGO_CONN_STRING || null;
const environment = process.env.MONGO_ENVIRONMENT || "localhost";
const database = "curso-api-rest-express-mongodb";

let connString;

switch (environment) {
case "localhost":
    if (baseConnString) {
        connString = baseConnString + `/${database}`;
        break;
    }
    throw new Error("Mongo DB - Connection String is missing");
case "atlas":
    connString = `mongodb+srv://${user}:${password}@localhost.cxaaz1b.mongodb.net/${database}`;
    break;
default:
    throw new Error("Mongo DB - Unknown Environment");
}

mongoose.connect(connString);

export const db = mongoose.connection;