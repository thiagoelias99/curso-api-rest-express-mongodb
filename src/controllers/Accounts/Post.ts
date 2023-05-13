import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AccountsProvider } from "../../database/mongo/providers";
import { IAccount } from "../../models";
import { InternalServerError } from "../../errors";

export const post = async (req: Request<any, Omit<IAccount, "id">>, res: Response, next: NextFunction) => {
    try {
        const result = await AccountsProvider.insert(req.body);

        if (result) {
            res.status(StatusCodes.CREATED).json({ id: result });
        } else {
            next(new InternalServerError(req, res));
        }
    } catch (error) {
        next(error);
    }
};