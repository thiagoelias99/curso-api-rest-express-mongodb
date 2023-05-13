import { IClient } from "../../../../models";
import { clients } from "../../entities";

export const insert = async (client: Omit<IClient, "uuid">) => {
    const newClient = new clients(client);
    const { _id } = await newClient.save();

    return _id;
};
