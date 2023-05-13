import { IClient } from "../../../../models";
import { clients } from "../../entities";

export const updateById = async (id: string, client: Pick<IClient, "addresses" | "maritalStatus" | "occupation">) => {
    return await clients.findByIdAndUpdate(id, client);
};
