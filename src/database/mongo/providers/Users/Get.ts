import { IUser } from "../../../../models";
import { users } from "../../entities";

export const getAll = async () => {
    const data: IUser[] = await users.find();
    return data;
};

export const getById = async (id: string) => {
    const data: IUser | null = await users.findById(id);
    return data;
};