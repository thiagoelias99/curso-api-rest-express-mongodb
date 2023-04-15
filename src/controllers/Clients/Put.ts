import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { IClient } from "../../models";

interface IParams {
    id: string
}

export const updateById = async (req: Request<IParams, Omit<IClient, "id">>, res: Response) => {
    const result = await ClientsProvider.updateById(req.params.id, req.body);

    if (result) {
        res.sendStatus(StatusCodes.OK);
    } else {
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};