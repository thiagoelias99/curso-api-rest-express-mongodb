import * as getAll from "./Get";
import * as insert from "./Insert";
import * as updateById from "./Update";
import * as deleteById from "./Delete";

export const UsersProvider = {
    ...getAll,
    ...insert,
    ...updateById,
    ...deleteById
};