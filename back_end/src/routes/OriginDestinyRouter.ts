import { Router } from "express";
import OriginDestinyController from "../controllers/OriginDestinyController";
import OriginDestinyValidations from "../validations/OriginDestinyValidations";

const routes = Router();

routes.post(
  "/",
  OriginDestinyValidations,
  new OriginDestinyController().createOriginDestiny
);
routes.get("/", new OriginDestinyController().findAllOriginDestiny);

export default routes;
