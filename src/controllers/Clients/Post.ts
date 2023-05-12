import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { EGender, EMaritalStatus, IClient } from "../../models";
import { InternalServerError } from "../../errors";
import { validation } from "../../server/middlewares/validation";
import * as yup from "yup";

export const post = async (req: Request<any, Omit<IClient, "id">>, res: Response, next: NextFunction) => {
    try {
        const result = await ClientsProvider.insert(req.body);

        if (result) {
            res.status(StatusCodes.CREATED).json({ id: result });
        } else {
            next(new InternalServerError(req, res,
                "Internal Server Error - Can't create registry"
            ));
        }
    } catch (error) {
        next(error);
    }
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBodyProps extends Omit<IClient, "uuid"> { }
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; 

export const postValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(1),
        cpf: yup.string().required().matches(cpfRegex, "cpf must match the following format: 000.000.000-00"),
        birthday_UTC: yup.date().required(),
        gender: yup.string().required().oneOf(Object.values(EGender)),
        occupation: yup.string().required(),
        maritalStatus: yup.string().required().oneOf(Object.values(EMaritalStatus)),
        addresses: yup.array().optional().default([]),
        accounts: yup.array().optional().default([])
    }))
}));