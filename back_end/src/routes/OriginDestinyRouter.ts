import { Router } from "express";
import OriginDestinyController from "../controllers/OriginDestinyController";
import OriginDestinyValidations from "../validations/OriginDestinyValidations";

const routes = Router();

routes.get("/", new OriginDestinyController().findAllOriginDestiny);
routes.post(
  "/",
  OriginDestinyValidations,
  new OriginDestinyController().createOriginDestiny
);
routes.put(
  "/:id",
  OriginDestinyValidations,
  new OriginDestinyController().updateOriginDestiny
);
routes.delete("/:id", new OriginDestinyController().deleteOriginDestiny);

export default routes;
