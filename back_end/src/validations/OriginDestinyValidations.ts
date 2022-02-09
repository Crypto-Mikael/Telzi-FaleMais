import { Request, Response, NextFunction } from "express";
import DDDsModel from "../models/DDDsModel";
import OriginDestinySchema from "../schemas/OriginDestinySchema";
import { ValidationError } from "joi";
import { getRepository } from "typeorm";
import OriginDestiny from "../entities/OriginDestiny";

const OriginDestinyValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error }: { error: ValidationError } = OriginDestinySchema.validate(
    req.body
  );
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
    const message = "origin and destiny has to exists in DDDs";
    return res.status(400).json({ message });
  }

  const repo = getRepository(OriginDestiny);

  const OriginDestinyExists = await repo.findOne({
    where: { origin, destiny },
  });

  if (OriginDestinyExists) {
    const message = "origin destiny already finded";
    return res.status(400).json({ message });
  }

  next();
};

export default OriginDestinyValidations;
