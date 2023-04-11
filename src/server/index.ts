import express from "express";

export const server = express();
server.use(express.json());

const port = process.env.PORT || 3333;

const livros = [
    {id: 1, nome: "Batman"},
    {id: 2, nome: "Wonder Woman"},
    {id: 3, nome: "Gata"},
];

server.get("/", (req, res) => {
    const data = new Date();
    res.status(200).json({
        msg: "Hello World",
        time: data
    });
});

server.get("/livros", (req, res) => {
    res.status(200).json(livros);
});