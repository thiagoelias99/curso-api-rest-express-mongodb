import { accounts } from "../../entities";

export const deleteById = async (id: string) => {
    return await accounts.findByIdAndDelete(id);
};