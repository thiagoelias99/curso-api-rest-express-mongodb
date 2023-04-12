import * as dotenv from "dotenv";
import { server } from "./server";
import { db } from "./database/mongo";

dotenv.config();

const port = process.env.PORT || 3333;

const startServer = () => {
    server.listen(port, () => {
        const data = new Date();
        console.log(
            `Node server started in ${data.toLocaleString()} at http://localhost:${port}`
        );
    });
};

db.on("error", console.log.bind(console, ""));
db.once("open", () => {
    console.log("Mongo Database connection OK");
    startServer();
});