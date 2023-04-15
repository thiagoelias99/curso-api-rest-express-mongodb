import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AccountsProvider } from "../../database/mongo/providers";
import { IAccount } from "../../models";

interface IParams {
    id: string
}

export const updateById = async (req: Request<IParams, Omit<IAccount, "id">>, res: Response) => {
    const result = await AccountsProvider.updateById(req.params.id, req.body);

    if (result) {
        res.sendStatus(StatusCodes.OK);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};