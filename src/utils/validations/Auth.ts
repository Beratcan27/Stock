import { IAuth } from "./../../models/Auth";
import Joi from "joi";

export const create = Joi.object<IAuth>({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
  passwordAgain: Joi.string().min(5).required(),
});

export const update = Joi.object<IAuth>({
  email: Joi.string().email().lowercase(),
  password: Joi.string().min(5),
});
