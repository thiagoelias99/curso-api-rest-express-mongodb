import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { UsersController } from "../controllers/Users";
import { updateById } from "../controllers/Users/UpdateById";

export const router = Router();

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello World",
        time: data
    });
});

router.route("/users")
    .get(UsersController.get)
    .post(UsersController.post);

router.route("/users/:id")
    .put(updateById)
    .delete (UsersController.deleteById);