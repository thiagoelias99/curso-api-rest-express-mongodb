import { users } from "../../entities";

export const deleteById = async (id: string) => {
    return await users.findByIdAndDelete(id);
};