import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

import { InternalServerError, NotFoundError } from "../errors";
import { mongooseCastError, mongooseValidationError } from "../errors/mongoose";

export function errorHandler(
    err: Error,
    req: Request<any, any, any, any>,
    res: Response,
    next: NextFunction
) {
    console.log(err.stack);
    console.log("Server running...");

    //Controllers Errors
    if (err instanceof InternalServerError) { err.sendResponse(); return; }
    if (err instanceof NotFoundError) { err.sendResponse(); return; }

    //Mongoose Errors
    if (err instanceof mongoose.Error.CastError) { mongooseCastError(err, res); return; }
    if (err instanceof mongoose.Error.ValidationError) { mongooseValidationError(err, res); return; }

    //Not controlled Errors
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
}