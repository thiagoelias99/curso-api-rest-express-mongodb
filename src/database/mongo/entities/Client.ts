import { Schema, model } from "mongoose";

import { IClient } from "../../../models";
import { ETableNames } from "../../ETableNames";

const clientSchema = new Schema<IClient>(
    {
        id: { type: String },
        name: { type: String, require: true },
        cpf: { type: String, require: true },
        birthday: { type: Date, require: true },
        gender: { type: String, require: true },
        ocuppation: { type: String, require: true },
        maritalStatus: { type: String, require: true },
    }
);

export const clients = model<IClient>(ETableNames.clients, clientSchema);