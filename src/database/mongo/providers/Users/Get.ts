import { IUser } from "../../../../models";
import { users } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IUser[];

    if (filterField && filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await users.find({ [filterField]: regex });

    } else if (filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await users.find().or([{ name: regex }, { email: regex }]);

    } else {
        data = await users.find();
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IUser | null = await users.findById(id);
    return data;
};