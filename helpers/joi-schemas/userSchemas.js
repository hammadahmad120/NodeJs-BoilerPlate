const Joi = require("joi");

module.exports = {
  createUserSchema: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    password: Joi.string().min(6).max(20).required(),
    email: Joi.string().required().email(),
  }),

  loginSchema: Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};