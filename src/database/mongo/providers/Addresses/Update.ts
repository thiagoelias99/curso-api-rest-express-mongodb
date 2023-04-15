import { IAddress } from "../../../../models";
import { addresses } from "../../entities";

export const updateById = async (id: string, address: Omit<IAddress, "id">) => {
    return await addresses.findByIdAndUpdate(id, address);
};
