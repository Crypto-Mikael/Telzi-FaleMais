import { Router } from "express";
import CreateDDDsController from "../controllers/DDDsController";

const routes = Router()

routes.post("/handle", new CreateDDDsController().handle);

export default routes