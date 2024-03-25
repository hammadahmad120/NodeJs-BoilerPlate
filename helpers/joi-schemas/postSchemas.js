const Joi = require("joi");
module.exports = {
  createPostSchema: Joi.object({
    title: Joi.string().min(2).max(50).required(),
    body: Joi.string().min(2).max(250).required()
  }),

  updatePostSchema: Joi.object({
    id: Joi.number()
    .positive()
    .greater(0)
    .max(Number.MAX_SAFE_INTEGER)
    .required(),
    title: Joi.string().min(2).max(50).required(),
    body: Joi.string().min(2).max(250).required()
  }),
};