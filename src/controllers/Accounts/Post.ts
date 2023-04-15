import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AccountsProvider } from "../../database/mongo/providers";
import { IAccount } from "../../models";

export const post = async (req: Request<any, Omit<IAccount, "id">>, res: Response) => {
    const result = await AccountsProvider.insert(req.body);

    if (result) {
        res.status(StatusCodes.CREATED).json({id: result});
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};