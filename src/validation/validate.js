import Joi from "joi";

export const userValidate = Joi.object({
  firstname:Joi.string().max(32).required(),
  lastname:Joi.string().max(32).required(),
  fathername: Joi.string().max(32).required(),
  phone: Joi.string().max(20).required(),
  addres: Joi.string().required(),
  problem:Joi.string().required()
}).required()
export const checkParams = Joi.object({
  id:Joi.number().integer().required()
})