import { IAccount } from "../../../../models";
import { accounts } from "../../entities";

export const insert = async (account: Omit<IAccount, "id">) => {
    const newAccount = new accounts(account);
    const { _id } = await newAccount.save();

    return _id;
};
