import { clients } from "../../entities";

export const signIn = async (email: string) => {
    return await clients.findOne({ email });
};