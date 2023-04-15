import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AddresssProvider } from "../../database/mongo/providers";
import { IAddress } from "../../models";

export const post = async (req: Request<any, Omit<IAddress, "id">>, res: Response) => {
    const result = await AddresssProvider.insert(req.body);

    if (result) {
        res.status(StatusCodes.CREATED).json({id: result});
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};