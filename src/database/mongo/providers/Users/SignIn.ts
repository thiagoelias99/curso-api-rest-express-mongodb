import { users } from "../../entities";

export const signIn = async (email: string) => {
    const data =  await users.find({ email }, { password: 1, _id: 0 });
    return data[0].password;
};