import { IClient } from "../../../../models";
import { clients } from "../../entities";

interface IQuery {
    field: string | null
    value: string | null
    search: string
    page: number
    limit: number
}
// export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
export const getAll = async ({ search, page = 1, limit = 3 }: IQuery) => {
    const searchRegex = RegExp(search? search : "", "i");

    const data: IClient[] = await clients.find({
        $or: [
            {name: searchRegex},
            {occupation: searchRegex},
            {maritalStatus: searchRegex}
        ]
    })
        .limit(limit).skip((page - 1) * limit)
        .populate("accounts", "accountType balance -cpf -_id");
    return data;
};

export const getById = async (id: string) => {
    const data: IClient | null = await clients
        .findById(id)
        .populate("accounts");
    return data;
};