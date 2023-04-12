import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UsersProvider } from "../../database/mongo/providers";
import { IUser } from "../../models";

interface IParams {
    id: string
}

export const updateById = async (req: Request<IParams, Omit<IUser, "id">>, res: Response) => {
    const user = {
        id: req.params.id,
        ...req.body
    };

    const result = await UsersProvider.updateById(user);

    if (result) {
        res.sendStatus(StatusCodes.OK);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};