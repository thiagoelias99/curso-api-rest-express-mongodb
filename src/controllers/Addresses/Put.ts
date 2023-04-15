import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AddresssProvider } from "../../database/mongo/providers";
import { IAddress } from "../../models";

interface IParams {
    id: string
}

export const updateById = async (req: Request<IParams, Omit<IAddress, "id">>, res: Response) => {
    const result = await AddresssProvider.updateById(req.params.id, req.body);

    if (result) {
        res.sendStatus(StatusCodes.OK);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};