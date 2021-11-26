import express from "express";
import * as dotenv from "dotenv";
import router from "./routes";
const app = express();

if (process.env.NODE_ENV == "dev")
    dotenv.config();

app.use(express.json())
app.use(router)

export default app;