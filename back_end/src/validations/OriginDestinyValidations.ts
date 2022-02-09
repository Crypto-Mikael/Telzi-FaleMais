import { Request, Response, NextFunction } from "express";
import DDDsModel from "../models/DDDsModel";
import OriginDestinySchema from "../schemas/OriginDestinySchema";
import { ValidationError } from "joi";

const OriginDestinyValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error }: { error: ValidationError } = OriginDestinySchema.validate(req.body);
  if (error) {
    return res.status(406).json({ message: error.message });
  }
  
  const { origin, destiny } = req.body;

  if (origin === destiny) {
    const message = "Origin can not be equal to Destiny";
    return res.status(400).json({ message });
  }
  const model = new DDDsModel();
  const allDDDs = JSON.parse(JSON.stringify(await model.executeFindAll()));
  const IdDestinyExists = allDDDs.some((id) => id.id_DDDs === destiny);
  const IdOriginExists = allDDDs.some((id) => id.id_DDDs === origin);

  if (!IdDestinyExists || !IdOriginExists) {
    const message = "Origin and Destiny has to exists";
    return res.status(400).json({ message });
  }

  next();
};;

export default OriginDestinyValidations;
