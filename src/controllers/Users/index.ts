import * as getAll from "./Get";
import * as post from "./Post";
import * as updateById from "./Put";
import * as deleteById from "./Delete";

export const UsersController = {
    ...getAll,
    ...post,
    ...updateById,
    ...deleteById
};