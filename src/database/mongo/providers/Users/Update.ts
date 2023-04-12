import { IUser } from "../../../../models";
import { users } from "../../entities";

export const updateById = async (id: string, user: Omit<IUser, "id">) => {
    return await users.findByIdAndUpdate(id, user);
};
