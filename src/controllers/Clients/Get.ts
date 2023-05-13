import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { InternalServerError, NotFoundError } from "../../errors";

import * as yup from "yup";
import { validation } from "../../server/middlewares/validation";
import { IClient } from "../../models";

interface IQuery extends Partial<IClient> {
    field: string | null
    value: string | null
    search: string
    page: number
    limit: number
}

export const getAll = async (req: Request<any, any, any, IQuery>, res: Response, next: NextFunction) => {
    try {
        const data = await ClientsProvider.getAll(req.query);
        
        // const data = await ClientsProvider.getAll(
        //     req.query.field == "" ? null : req.query.field,
        //     req.query.value == "" ? null : req.query.value
        // );
        if (data) {
            res.status(StatusCodes.OK).json(data);
            return;
        }
        next(new InternalServerError(req, res));
    } catch (error) {
        next(error);
    }
};

interface IParams {
    uuid: string
}

export const getById = async (req: Request<IParams>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    try {
        const data = await ClientsProvider.getById(uuid);

        if (data) {
            res.status(StatusCodes.OK).json(data);
            return;
        }
        next(new NotFoundError(req, res,
            `Client uuid = ${uuid} not found`
        ));

    } catch (error) {
        next(error);
    }
};

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParams>(yup.object().shape({
        uuid: yup.string().length(24).required()
    }))
}));