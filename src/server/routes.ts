import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { welcome } from "./welcome";

import {
    ClientsController,
    AccountsController
} from "../controllers";

export const router = Router();

router.get("/", (req, res) => {
    res.status(StatusCodes.OK).send(welcome());
});

router.route("/clients")
    .get(ClientsController.getAll)
    .post(ClientsController.postValidation ,ClientsController.post);

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