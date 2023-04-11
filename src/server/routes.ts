import { Router } from "express";
import { StatusCodes } from "http-status-codes";

export const router = Router();

const pokemons = [
    { id: 1, nome: "Charmander" },
    { id: 2, nome: "Bulbasaur" },
    { id: 3, nome: "Squirtle" },
];

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello World",
        time: data
    });
});

router.route("/pokemons")
    .get((req, res) => {
        res.status(StatusCodes.OK).json(pokemons);
    })
    .post((req, res) => {
        res.status(StatusCodes.CREATED).json(pokemons);
    });