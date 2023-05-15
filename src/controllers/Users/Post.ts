import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsersProvider } from "../../database/mongo/providers";
import { IUser } from "../../models";
import { InternalServerError } from "../../errors";
import { validation } from "../../server/middlewares/validation";
import * as yup from "yup";

export const signUp = async (req: Request<any, Omit<IUser, "uuid" | "signupDate" | "lastLogin">>, res: Response, next: NextFunction) => {
    try {
        const result = await UsersProvider.insert(req.body);

        if (result) {
            res.status(StatusCodes.CREATED).json({ uuid: result });
        } else {
            next(new InternalServerError(req, res,
                "Internal Server Error - Can't create registry"
            ));
        }
    } catch (error) {
        next(error);
    }
};

export const signUpValidation = validation((getSchema) => ({
    body: getSchema<Omit<IUser, "uuid" | "signupDate" | "lastLogin">>(yup.object().shape({
        name: yup.string().required().min(1),
        password: yup.string().required().min(5),
        email: yup.string().email().required()
    }))
}));

export const signIn = async (req: Request<any, Omit<IUser, "name" | "uuid" | "signupDate" | "lastLogin">>, res: Response, next: NextFunction) => {
    try {
        const storedPassword = await UsersProvider.signIn(req.body.email);

        const data = null;
        console.log(storedPassword);

        if (data) {
            res.status(StatusCodes.OK).json(data);
            return;
        }
        next(new InternalServerError(req, res));
    } catch (error) {
        next(error);
    }
};

export const signInValidation = validation((getSchema) => ({
    body: getSchema<Omit<IUser, "uuid" | "name" | "signupDate" | "lastLogin">>(yup.object().shape({
        password: yup.string().required().min(5),
        email: yup.string().email().required()
    }))
}));