import { IAccount } from "../../../../models";
import { accounts } from "../../entities";

export const updateById = async (id: string, account: Omit<IAccount, "id">) => {
    return await accounts.findByIdAndUpdate(id, account);
};
