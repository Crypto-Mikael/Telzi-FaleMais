import { Router } from "express";
import OriginDestinyController from "../controllers/OriginDestinyController";
import OriginDestinyValidations from "../validations/DDDsValidations";

const routes = Router();

routes.post("/", new OriginDestinyController().createOriginDestiny);
routes.get("/", new OriginDestinyController().findAllOriginDestiny);

export default routes;
