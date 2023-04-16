import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { IClient } from "../../models";

export const post = async (req: Request<any, Omit<IClient, "id">>, res: Response) => {
    const result = await ClientsProvider.insert(req.body);
    
    if (result) {
        res.status(StatusCodes.CREATED).json({ id: result });
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};