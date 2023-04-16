import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import {
    ClientsController,
    AccountsController
} from "../controllers";

export const router = Router();

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello to App",
        time: data
    });
});

router.route("/clients")
    .get(ClientsController.getAll)
    .post(ClientsController.post);

router.route("/clients/:id")
    .get(ClientsController.getById)
    .put(ClientsController.updateById)
    .delete(ClientsController.deleteById);

router.route("/accounts")
    .get(AccountsController.getAll)
    .post(AccountsController.post);

router.route("/accounts/:id")
    .get(AccountsController.getById)
    .put(AccountsController.updateById)
    .delete(AccountsController.deleteById);