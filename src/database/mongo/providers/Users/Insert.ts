import { IUser } from "../../../../models";
import { users } from "../../entities";

export const insert = async (user: Omit<IUser, "uuid">) => {
    const newUser = new users(user);
    const { _id } = await newUser.save();

    return _id;
};
