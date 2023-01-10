import * as dotenv from "dotenv";
import express from "express";
import configureDI from "./config/deps";
import configureRouter from "./config/routing";

/**
 * Variables
 */
dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

/**
 * Configuration
 */
const app = express();

app.use(express.json());

configureRouter(app, configureDI())

/**
 * Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});