import { Request, Response } from "express";
import express from "express";
import "./database";
import routes from "./routes";

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.use("/DDDs", routes.DDDs);

app.get("/", (_req: Request, res: Response) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

