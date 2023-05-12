import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { InternalServerError, NotFoundError } from "../../errors";

interface IQuery {
    field: string | null
    value: string | null
}

interface IParams {
    id: string
}

export const getAll = async (req: Request<any, any, any, IQuery>, res: Response, next: NextFunction) => {
    try {
        const data = await ClientsProvider.getAll(
            req.query.field == "" ? null : req.query.field,
            req.query.value == "" ? null : req.query.value
        );
        if (data) {
            res.status(StatusCodes.OK).json(data);
            return;
        }
        next(new InternalServerError(req, res));
    } catch (error) {
        next(error);
    }
};

export const getById = async (req: Request<IParams>, res: Response, next: NextFunction) => {
    const uuid = req.params.id;
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