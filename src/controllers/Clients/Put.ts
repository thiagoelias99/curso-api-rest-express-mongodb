import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { IClient } from "../../models";
import { NotFoundError } from "../../errors";

interface IParams {
    id: string
}

export const updateById = async (req: Request<IParams, Omit<IClient, "id">>, res: Response, next: NextFunction) => {
    const uuid = req.params.id;

    try {
        const result = await ClientsProvider.updateById(uuid, req.body);

        if (result) {
            res.sendStatus(StatusCodes.OK);
        } else {
            next(new NotFoundError(req, res,
                `Client uuid = ${uuid} not found`
            ));
        }
    } catch (error) {
        next(error);
    }
};