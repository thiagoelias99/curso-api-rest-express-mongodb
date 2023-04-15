import { Schema, model } from "mongoose";

import { IAccount } from "../../../models";
import { ETableNames } from "../../ETableNames";

const accountSchema = new Schema<IAccount>(
    {
        id: { type: String },
        accountNumber: { type: String, require: true },
        cpf: { type: String, require: true },
        branch: { type: Number, require: true },
        accountType: { type: String, require: true },
        balance: { type: Number, require: true },
    }
);

export const accounts = model<IAccount>(ETableNames.accounts, accountSchema);