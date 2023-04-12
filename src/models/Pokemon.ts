import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String},
        pokeId: {type: String, required: true},
        capturedIn: {type: String, required: true}
    }
);

export const pokemons = mongoose.model("pokemons", pokemonSchema);