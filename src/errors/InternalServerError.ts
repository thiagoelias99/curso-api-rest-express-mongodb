import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class InternalServerError {
    constructor(
        public req: Request<any, any, any, any>,
        public res: Response
    ) { }

    sendResponse(): void {
        this.res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}