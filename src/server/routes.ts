import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { welcome } from "./welcome";

import {
    ClientsController,
    AccountsController,
    UsersController
} from "../controllers";

export const router = Router();

router.get("/", (req, res) => {
    res.status(StatusCodes.OK).send(welcome());
});

router.route("/clients")
    .get(ClientsController.getAll)
    .post(ClientsController.postValidation, ClientsController.post);

router.route("/clients/:uuid")
    .get(ClientsController.getByIdValidation, ClientsController.getById)
    .put(ClientsController.putValidation, ClientsController.updateById)
    .delete(ClientsController.deleteValidation, ClientsController.deleteById);

router.route("/accounts")
    .get(AccountsController.getAll)
    .post(AccountsController.post);

router.route("/accounts/:id")
    .get(AccountsController.getById)
    .put(AccountsController.updateById)
    .delete(AccountsController.deleteById);

router.route("/users")
    .get(UsersController.getAll)
    .post(UsersController.postValidation, UsersController.post);

router.route("/users/:uuid")
    .get(UsersController.getByIdValidation, UsersController.getById);
// .put(UsersController.putValidation, UsersController.updateById)
// .delete(UsersController.deleteValidation, UsersController.deleteById);