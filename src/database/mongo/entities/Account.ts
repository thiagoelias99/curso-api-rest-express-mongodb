import { Schema, model } from "mongoose";

import { IAccount } from "../../../models";
import { ETableNames } from "../../ETableNames";

const accountSchema = new Schema<IAccount>(
    {
        id: { type: String },
        accountNumber: { type: String, required: true },
        cpf: { type: String, required: true },
        branch: { type: Number, required: true },
        accountType: { type: String, required: true },
        balance: { type: Number, required: true },
    },
    {
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

export const accounts = model<IAccount>(ETableNames.accounts, accountSchema);