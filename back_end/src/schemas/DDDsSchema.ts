import Joi from 'joi';

const DDDsSchema = Joi.object({
  description: Joi.string()
    .required()
    .pattern(new RegExp("0[0-9][0-9]"))
    .messages({
      "string.pattern.base": '\"description\" need to be a valid DDD',
    }),
});

export default DDDsSchema