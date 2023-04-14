import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsersProvider } from "../../database/mongo/providers";

interface IQuery {
    field: string | null
    value: string | null
}

export const getAll = async (req: Request<any, any, any, IQuery>, res: Response) => {
    const data = await UsersProvider.getAll(
        req.query.field == "" ? null : req.query.field,
        req.query.value == "" ? null : req.query.value
    );

    if (data) {
        res.status(StatusCodes.OK).json(data);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

interface IParams {
    id: string
}

export const getById = async (req: Request<IParams>, res: Response) => {
    const data = await UsersProvider.getById(req.params.id);

    if (data) {
        res.status(StatusCodes.OK).json(data);
    } else {
        res.sendStatus(StatusCodes.NOT_FOUND);
    }
};