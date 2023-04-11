import { server } from "./server";

const port = process.env.PORT || 3333;

const startServer = () => {
    server.listen(port, () => {
        const data = new Date();
        console.log(
            `Node server started in ${data.toLocaleString()} at http://localhost:${port}`
        );
    });
};

startServer();