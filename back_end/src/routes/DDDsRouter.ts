import { Router } from "express";
import DDDsController from "../controllers/DDDsController";
import DDDsValidations from "../validations/DDDsValidations"


const routes = Router()

routes.get("/", new DDDsController().findAll_DDDs);
routes.post("/", DDDsValidations, new DDDsController().create_DDDs);
routes.put("/:id", new DDDsController().update_DDD);
routes.delete("/:id", new DDDsController().delete_DDD);

export default routes