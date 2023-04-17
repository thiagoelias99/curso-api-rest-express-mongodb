import { Schema, model } from "mongoose";

import { IAccount, IClient } from "../../../models";
import { ETableNames } from "../../ETableNames";
import { accounts } from "./Account";

const clientSchema = new Schema<IClient>(
    {
        id: { type: String },
        name: { type: String, require: true },
        cpf: { type: String, require: true },
        birthday_UTC: { type: Date, require: true },
        gender: { type: String, require: true },
        occupation: { type: String, require: true },
        maritalStatus: { type: String, require: true },
        addresses: { type: [], required: true },
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

clientSchema.virtual("accounts", {
    ref: ETableNames.accounts,
    localField: "cpf",
    foreignField: "cpf"
});

export const clients = model<IClient>(ETableNames.clients, clientSchema);