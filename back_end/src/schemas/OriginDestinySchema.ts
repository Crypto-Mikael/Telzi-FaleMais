import Joi from "joi";

const OriginDestinySchema = Joi.object({
  origin: Joi.number().required(),
  destiny: Joi.number().required(),
  value: Joi.number().required(),
});

export default OriginDestinySchema;
