import { Schema, model } from "mongoose";

import { IUser } from "../../../models";
import { ETableNames } from "../../ETableNames";

const userSchema = new Schema<IUser>(
    {
        uuid: { type: String },
        name: { type: String, required: true },
        password: { type: String, required: true, minlength: 5 },
        email: { type: String, required: true },
        signupDate: { type: Date, default: new Date() },
        lastLogin: { type: Date, default: new Date() }
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const users = model<IUser>(ETableNames.users, userSchema);