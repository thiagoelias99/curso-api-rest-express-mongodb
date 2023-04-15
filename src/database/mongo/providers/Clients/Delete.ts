import { clients } from "../../entities";

export const deleteById = async (id: string) => {
    return await clients.findByIdAndDelete(id);
};