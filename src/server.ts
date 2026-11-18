import "dotenv/config";
import app from "./app";
import { prisma } from "./lib/prisma";
import config from "./config";

async function main() {

    const port = config.PORT;

    try {
        await  prisma.$connect();
        console.log("Connected to the database successfully");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("Erro starting the server",error);
        await  prisma.$disconnect();
        process.exit(1);
    }
}

main();