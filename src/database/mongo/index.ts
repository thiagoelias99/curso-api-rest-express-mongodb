import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const user = process.env.MONGO_USERNAME || "";
const password = process.env.MONGO_PASSWORD || "";
const database = "curso-api-rest-express-mongodb";

// const connString = `mongodb+srv://${user}:${password}@localhost.cxaaz1b.mongodb.net/${database}`;

const connString = `mongodb://127.0.0.1:27017/${database}`;

mongoose.connect(connString);

export const db = mongoose.connection;