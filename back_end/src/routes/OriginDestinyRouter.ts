import { Router } from "express";
import OriginDestinyController from "../controllers/OriginDestinyController";
import OriginDestinyValidations from "../validations/DDDsValidations";

const routes = Router();

routes.post("/", new OriginDestinyController().createOriginDestiny);

export default routes;
