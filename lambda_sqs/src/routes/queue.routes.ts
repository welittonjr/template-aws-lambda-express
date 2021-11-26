import { Router } from "express";

const QueueRoutes = Router();

QueueRoutes.post("/", async (_, response) => {
    try {

        return response.json();

    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

export default QueueRoutes;