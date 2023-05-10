import { Schema, model } from "mongoose";

import { IClient } from "../../../models";
import { ETableNames } from "../../ETableNames";

const clientSchema = new Schema<IClient>(
    {
        id: { type: String },
        name: { type: String, required: true },
        cpf: { type: String, required: true },
        birthday_UTC: { type: Date, required: true },
        gender: { type: String, required: true },
        occupation: { type: String, required: true },
        maritalStatus: { type: String, required: true },
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