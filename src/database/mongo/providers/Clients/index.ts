import * as get from "./Get";
import * as insert from "./Insert";
import * as update from "./Update";
import * as del from "./Delete";

export const ClientsProvider = {
    ...get,
    ...insert,
    ...update,
    ...del
};