import * as get from "./Get";
import * as post from "./Post";
import * as put from "./Put";
import * as del from "./Delete";

export const AccountsController = {
    ...get,
    ...post,
    ...put,
    ...del
};