import { Router } from "express";
import CreateDDDsController from "../controllers/DDDsController";
import DDDsValidations from "../validations/DDDsValidations"


const routes = Router()

routes.post("/handle", DDDsValidations, new CreateDDDsController().handle);

export default routes