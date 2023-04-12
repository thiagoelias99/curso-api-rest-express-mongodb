import { IUser } from "../../../../models";
import { users } from "../../entities";

export const updateById = async (user: IUser) => {
    const { id } = user;
    return await users.findByIdAndUpdate(id, user);
};
