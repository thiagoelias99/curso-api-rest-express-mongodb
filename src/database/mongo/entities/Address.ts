import { Schema, model } from "mongoose";

import { IAddress } from "../../../models";
import { ETableNames } from "../../ETableNames";

const addressSchema = new Schema<IAddress>(
    {
        id: { type: String },
        street: { type: String, require: true },
        number: { type: String, require: true },
        district: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        zipCode: { type: String, require: true },
    }
);

export const addresses = model<IAddress>(ETableNames.addresses, addressSchema);