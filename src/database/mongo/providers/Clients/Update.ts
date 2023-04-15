import { IClient } from "../../../../models";
import { clients } from "../../entities";

export const updateById = async (id: string, client: Omit<IClient, "id">) => {
    return await clients.findByIdAndUpdate(id, client);
};
