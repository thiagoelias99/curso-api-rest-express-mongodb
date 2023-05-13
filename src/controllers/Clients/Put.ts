import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ClientsProvider } from "../../database/mongo/providers";
import { EMaritalStatus, IClient } from "../../models";
import { NotFoundError } from "../../errors";

import * as yup from "yup";
import { validation } from "../../server/middlewares/validation";

interface IParams {
    id: string
}

export const updateById = async (req: Request<IParams, Omit<IClient, "uuid">>, res: Response, next: NextFunction) => {
    const uuid = req.params.id;
    const { addresses, maritalStatus, occupation } = req.body;
    const data: Pick<IClient, "addresses" | "maritalStatus" | "occupation"> = {
        addresses,
        maritalStatus,
        occupation
    };

    console.log(data);

    try {
        const result = await ClientsProvider.updateById(uuid, data);

        if (result) {
            res.sendStatus(StatusCodes.OK);
        } else {
            next(new NotFoundError(req, res,
                `Client uuid = ${uuid} not found`
            ));
        }
    } catch (error) {
        next(error);
    }
};

export const putValidation = validation((getSchema) => ({
    body: getSchema<Partial<IClient>>(yup.object().shape({
        occupation: yup.string(),
        maritalStatus: yup.string().oneOf(Object.values(EMaritalStatus)),
        addresses: yup.array().of(
            yup.object().shape({
                street: yup.string().required(),
                number: yup.string().required(),
                district: yup.string().required(),
                city: yup.string().required(),
                state: yup.string().required(),
                zipCode: yup.string().required(),
            })
        )
    }))
    ,
    params: getSchema<IParams>(yup.object().shape({
        id: yup.string().length(24).required()
    }))
}));