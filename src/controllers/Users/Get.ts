import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsersProvider } from "../../database/mongo/providers";


export const getAll = async (req: Request, res: Response) => {
    const data = await UsersProvider.getAll();

    if (data) {
        res.status(StatusCodes.OK).json(data);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};