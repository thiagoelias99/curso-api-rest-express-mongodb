import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { NotFoundError } from "../../errors";

interface IParams {
    id: string
}

export const deleteById = async (req: Request<IParams>, res: Response, next: NextFunction) => {
    const uuid = req.params.id;

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