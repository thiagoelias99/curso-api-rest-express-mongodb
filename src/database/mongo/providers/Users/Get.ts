import { IUser } from "../../../../models";
import { users } from "../../entities";

export const getAll = async () => {
    const data: IUser[] = await users.find();
    return data;
};