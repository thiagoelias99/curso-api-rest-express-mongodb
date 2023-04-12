import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { db } from "../database/mongo";
import { pokemons } from "../models/Pokemon";

export const router = Router();

db.on("error", console.log.bind(console, ""));
db.once("open", () => {
    console.log("Mongo Database connection OK");
});

router.get("/", (req, res) => {
    const data = new Date();
    res.status(StatusCodes.OK).json({
        msg: "Hello World",
        time: data
    });
});

router.route("/pokemons")
    .get((req, res) => {
        pokemons.find()
            .then((data: any) => {
                res.status(StatusCodes.OK).json(data);
            });
    })
    .post((req, res) => {
        const pokemon = new pokemons(req.body);
        pokemon.save()
            .then(() => {
                res.sendStatus(StatusCodes.CREATED);
            });
    }); 