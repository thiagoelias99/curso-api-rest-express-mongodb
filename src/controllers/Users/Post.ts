import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsersProvider } from "../../database/mongo/providers";
import { IUser } from "../../models";


export const post = async (req: Request<any, IUser>, res: Response) => {
    const result = await UsersProvider.insert(req.body);

    if (result) {
        res.status(StatusCodes.CREATED).json({id: result});
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};