import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { UsersProvider } from "../../database/mongo/providers";
import { InternalServerError, NotFoundError } from "../../errors";

import * as yup from "yup";
import { validation } from "../../server/middlewares/validation";
import { IUser } from "../../models";

interface IQuery extends Partial<IUser> {
    search?: string
    page?: number
    limit?: number
}

export const getAll = async (req: Request<any, any, any, IQuery>, res: Response, next: NextFunction) => {
    try {
        const data = await UsersProvider.getAll(req.query);

        if (data) {
            res.status(StatusCodes.OK).json(data);
            return;
        }
        next(new InternalServerError(req, res));
    } catch (error) {
        next(error);
    }
};

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQuery>(yup.object().shape({
        search: yup.string().optional(),
        page: yup.number().optional().min(1),
        limit: yup.number().optional().min(1)
    }))
}));

