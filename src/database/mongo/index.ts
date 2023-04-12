import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const user = process.env.MONGO_USERNAME || "";
const password = process.env.MONGO_PASSWORD || "";
const database = "curso-api-rest-express-mongodb";

const connString = `mongodb+srv://${user}:${password}@localhost.cxaaz1b.mongodb.net/${database}`;

console.log("🚀 ~ file: index.ts:9 ~ connString:", connString);

mongoose.connect(connString);

export const db = mongoose.connection;