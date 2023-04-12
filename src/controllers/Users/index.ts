import * as get from "./Get";
import * as post from "./Post";
import * as deleteById from "./Delete";

export const UsersController = {
    ...get,
    ...post,
    ...deleteById
};