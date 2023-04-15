import { IUser } from "../../../../models";
import { users } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IUser[];

    if (filterField && filterValue) {
        const search = `${filterValue.toLowerCase()}|${filterValue.toUpperCase()}|${capitalize(filterValue)}`;

        data = await users.find({ [filterField]: RegExp(search, "gm") });
    } else {
        data = await users.find();
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IUser | null = await users.findById(id);
    return data;
};

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}