import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
    constructor(
        public req: Request<any, any, any, any>,
        public res: Response,
        public reason?: object | string,
        public message = "Not Found"
    ) {
        super(message);
    }

    sendResponse(): void {
        if (typeof this.reason === "string") {
            this.res.status(StatusCodes.NOT_FOUND).send(this.reason);
            return;
        }
        if (typeof this.reason === "object") {
            this.res.status(StatusCodes.NOT_FOUND).json(this.reason);
            return;
        }
        this.res.sendStatus(StatusCodes.NOT_FOUND);
    }
}