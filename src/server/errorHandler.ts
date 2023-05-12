import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../errors";
import { StatusCodes } from "http-status-codes";

export function errorHandler(
    err: any,
    req: Request<any, any, any, any>,
    res: Response,
    next: NextFunction
) {
    if (err instanceof InternalServerError) {
        err.sendResponse();
    } else {
        res.sendStatus(StatusCodes.IM_A_TEAPOT);
    }
}