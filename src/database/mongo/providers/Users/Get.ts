import { IUser } from "../../../../models";
import { users } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IUser[];

    if (filterField && filterValue) {
        const searchRegex = `/${filterValue}/`;

        data = await users.find({ [filterField]: searchRegex}).exec();
        // data = await users.find().where(filterField, filterValue);
    } else {
        data = await users.find();
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IUser | null = await users.findById(id);
    return data;
};