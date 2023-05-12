import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { IClient } from "../../models";
import { InternalServerError } from "../../errors";

export const post = async (req: Request<any, Omit<IClient, "id">>, res: Response, next: NextFunction) => {
    try {
        const result = await ClientsProvider.insert(req.body);

        if (result) {
            res.status(StatusCodes.CREATED).json({ id: result });
        } else {
            next(new InternalServerError(req, res,
                "Internal Server Error - Can't create registry"
            ));
        }
    } catch (error) {
        next(error);
    }
};