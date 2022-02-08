import { Request, Response } from "express";
import express from "express";
import "./database";
import DDDsRouter from "./routes/DDDsRouter";
import OriginDestinyRouter from "./routes/OriginDestinyRouter";

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use("/DDDs", DDDsRouter);
app.use("/", OriginDestinyRouter);

app.get("/", (_req: Request, res: Response) => res.send("Hello World!"));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

export default app;