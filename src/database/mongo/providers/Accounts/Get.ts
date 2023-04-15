import { IAccount } from "../../../../models";
import { accounts } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IAccount[];

    if (filterField && filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await accounts.find({ [filterField]: regex });

    } else if (filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await accounts.find().or([
            { accountNumber: regex }
        ]);

    } else {
        data = await accounts.find();
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IAccount | null = await accounts.findById(id);
    return data;
};