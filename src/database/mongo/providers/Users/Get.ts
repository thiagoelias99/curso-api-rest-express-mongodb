import { IUser } from "../../../../models";
import { users } from "../../entities";

interface IQuery {
    search?: string
    page?: number
    limit?: number
}
// export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
export const getAll = async ({ search = "", page = 1, limit = 10 }: IQuery) => {
    const searchRegex = RegExp(search, "i");

    const data: IUser[] = await users.find({
        $or: [
            {name: searchRegex},
            {email: searchRegex}
        ]
    })
        .limit(limit).skip((page - 1) * limit);
    return data;
};

export const getById = async (id: string) => {
    const data: IUser | null = await users
        .findById(id);
    return data;
};