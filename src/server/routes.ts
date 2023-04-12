import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { db } from "../database/mongo";
import { users } from "../database/mongo/entities";
import { UsersController } from "../controllers/Users";

export const router = Router();

db.on("error", console.log.bind(console, ""));
db.once("open", () => {
    console.log("Mongo Database connection OK");
});

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello World",
        time: data
    });
});

router.route("/users")
    .get(UsersController.get)
    .post((req, res) => {
        const user = new users(req.body);
        user.save()
            .then(() => {
                res.sendStatus(StatusCodes.CREATED);
            });
    }); 