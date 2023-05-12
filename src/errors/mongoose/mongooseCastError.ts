import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CastError } from "mongoose";

export function mongooseCastError(err: CastError, res: Response): void {
    res.status(StatusCodes.BAD_REQUEST).send(err.message);
}