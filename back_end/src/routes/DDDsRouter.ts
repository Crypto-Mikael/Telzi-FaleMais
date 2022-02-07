import { Router } from "express";
import DDDsController from "../controllers/DDDsController";
import DDDsValidations from "../validations/DDDsValidations"


const routes = Router()

routes.get("/DDDs", new DDDsController().findAll_DDDs);
routes.post("/DDDs", DDDsValidations, new DDDsController().create_DDDs);
routes.put("/DDDs/:id", new DDDsController().update_DDD);
routes.delete("/DDDs/:id", new DDDsController().delete_DDD);

export default routes