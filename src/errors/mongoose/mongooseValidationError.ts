import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export function mongooseValidationError(err: mongoose.Error.ValidationError, res: Response): void {
    const mensagensErro = Object.values(err.errors)
        .map(err => err.message)
        .join("; ");

    res.status(StatusCodes.BAD_REQUEST).send(err.errors);
}