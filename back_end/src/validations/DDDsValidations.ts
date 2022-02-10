import DDDsSchema from "../schemas/DDDsSchema";
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from "joi";

const DDDsValidations = async (req: Request, res: Response, next: NextFunction ) => {
  const { error }: { error: ValidationError } = DDDsSchema.validate(req.body);
  if (error) {
    return res.status(406).json({ message: error.message });
  };
  next();
};

export default DDDsValidations;