import { IAddress } from "../../../../models";
import { addresses } from "../../entities";

export const insert = async (address: Omit<IAddress, "id">) => {
    const newAddress = new addresses(address);
    const { _id } = await newAddress.save();

    return _id;
};
