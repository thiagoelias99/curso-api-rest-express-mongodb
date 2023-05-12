import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class InternalServerError extends Error {
    constructor(
        public req: Request<any, any, any, any>,
        public res: Response,
        public message = "Internal Server Error"
    ) {
        super(message);
    }

    sendResponse(): void {
        this.res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}