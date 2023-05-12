import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import mongoose from "mongoose";
import { InternalServerError } from "../../errors";

interface IQuery {
    field: string | null
    value: string | null
}

export const getAll = async (req: Request<any, any, any, IQuery>, res: Response, next: NextFunction) => {
    const data = await ClientsProvider.getAll(
        req.query.field == "" ? null : req.query.field,
        req.query.value == "" ? null : req.query.value
    );

    if (data) {
        res.status(StatusCodes.OK).json(data);
    } else {
        next(new InternalServerError(req, res));
    }
};

interface IParams {
    id: string
}

export const getById = async (req: Request<IParams>, res: Response) => {
    try {
        const data = await ClientsProvider.getById(req.params.id);

        if (data) {
            res.status(StatusCodes.OK).json(data);
        } else {
            res.sendStatus(StatusCodes.NOT_FOUND);
        }
    } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            res.sendStatus(StatusCodes.BAD_REQUEST);
        } else {
            res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
};