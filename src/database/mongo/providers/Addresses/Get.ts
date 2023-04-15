import { IAddress } from "../../../../models";
import { addresses } from "../../entities";

export const getAll = async (filterField: string | null = null, filterValue: string | null = null) => {
    let data: IAddress[];

    if (filterField && filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await addresses.find({ [filterField]: regex });

    } else if (filterValue) {
        const regex = RegExp(filterValue, "gmi");
        data = await addresses.find().or([
            { street: regex },
            { district: regex },
            { city: regex },
            { state: regex },
            { zipCode: regex },
        ]);

    } else {
        data = await addresses.find();
    }
    return data;
};

export const getById = async (id: string) => {
    const data: IAddress | null = await addresses.findById(id);
    return data;
};