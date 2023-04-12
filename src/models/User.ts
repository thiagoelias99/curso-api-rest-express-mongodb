import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, require: true},
        email: {type: String, required: true},
    }
);

export const users = mongoose.model("users", userSchema);