import { Schema, model } from "mongoose";

import { IUser } from "../../../models";
import { ETableNames } from "../../ETableNames";

const userSchema = new Schema<IUser>(
    {
        id: { type: String },
        name: { type: String, require: true },
        email: { type: String, required: true },
    }
);

export const users = model<IUser>(ETableNames.user, userSchema);