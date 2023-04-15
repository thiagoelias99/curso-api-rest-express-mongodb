import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { UsersController, ClientsController } from "../controllers";

export const router = Router();

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello to App",
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

router.route("/clients")
    .get(ClientsController.getAll)
    .post(ClientsController.post);

router.route("/clients/:id")
    .get(ClientsController.getById)
    .put(ClientsController.updateById)
    .delete(ClientsController.deleteById);