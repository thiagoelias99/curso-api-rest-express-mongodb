import * as get from "./Get";
import * as insert from "./Insert";
import * as updateById from "./Update";
import * as deleteById from "./Delete";

export const UsersProvider = {
    ...get,
    ...insert,
    ...updateById,
    ...deleteById
};