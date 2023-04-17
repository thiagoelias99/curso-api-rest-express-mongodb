import { IClient } from "../../../../models";
import { clients } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IClient[];

    if (filterField && filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await clients
            .find({ [filterField]: regex })
            .populate("accounts", "accountType balance -cpf -_id");

    } else if (filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await clients
            .find()
            .or([
                { name: regex },
                { occupation: regex },
                { maritalStatus: regex }
            ])
            .populate("accounts", "accountType balance -cpf -_id");

    } else {
        data = await clients
            .find()
            .populate("accounts", "accountType balance -cpf -_id");
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IClient | null = await clients
        .findById(id)
        .populate("accounts");
    return data;
};