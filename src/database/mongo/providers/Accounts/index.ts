import * as get from "./Get";
import * as insert from "./Insert";
import * as update from "./Update";
import * as del from "./Delete";

export const AccountsProvider = {
    ...get,
    ...insert,
    ...update,
    ...del
};