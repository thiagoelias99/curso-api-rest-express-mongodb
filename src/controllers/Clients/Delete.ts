import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { NotFoundError } from "../../errors";

import * as yup from "yup";
import { validation } from "../../server/middlewares/validation";

interface IParams {
    uuid: string
}

export const deleteById = async (req: Request<IParams>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    try {
        const result = await ClientsProvider.deleteById(uuid);

        if (result) {
            res.status(StatusCodes.NO_CONTENT).json(result);
        } else {
            next(new NotFoundError(req, res,
                `Client uuid = ${uuid} not found`
            ));
        }
    } catch (error) {
        next(error);
    }
};

export const deleteValidation = validation((getSchema) => ({
    params: getSchema<IParams>(yup.object().shape({
        uuid: yup.string().length(24).required()
    }))
}));