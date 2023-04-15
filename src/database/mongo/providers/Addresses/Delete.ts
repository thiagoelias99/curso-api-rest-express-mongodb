import { addresses } from "../../entities";

export const deleteById = async (id: string) => {
    return await addresses.findByIdAndDelete(id);
};