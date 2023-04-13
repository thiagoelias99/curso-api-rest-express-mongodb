import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { UsersController } from "../controllers/Users";

export const router = Router();

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello World",
        time: data
    });
});

router.route("/users")
    .get(UsersController.getAll)
    .post(UsersController.post);

router.route("/users/:id")
    .get(UsersController.getById)
    .put(UsersController.updateById)
    .delete(UsersController.deleteById);