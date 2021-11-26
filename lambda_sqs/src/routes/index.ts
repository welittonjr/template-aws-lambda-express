import { Router } from 'express';
import QueueRoutes from './queue.routes';

const routes = Router();

routes.get("/alive", (_, response) =>{
    return response.status(200).json({ message: "I\'m alive!" });
});

routes.use("/queue", QueueRoutes);

export default routes;