import { IClient } from "../../../../models";
import { clients } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IClient[];

    if (filterField && filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await clients.find({ [filterField]: regex });

    } else if (filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await clients.find().or([
            { name: regex },
            { occupation: regex },
            { maritalStatus: regex }
        ]);

    } else {
        data = await clients.find();
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IClient | null = await clients.findById(id);
    return data;
};