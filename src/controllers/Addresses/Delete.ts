import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AddresssProvider } from "../../database/mongo/providers";

interface IParams {
    id: string
}

export const deleteById = async (req: Request<IParams>, res: Response) => {
    const result = await AddresssProvider.deleteById(req.params.id);

    if (result) {
        res.status(StatusCodes.NO_CONTENT).json(result);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};