import { IUser, Position } from "./../../models/User";
import Joi from "joi";

export const create = Joi.object<IUser>({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  age: Joi.string().required(),
  birthDay: Joi.date().required(),
  position: Joi.string()
    .valid(...Object.values(Position))
    .required(),
  identity: Joi.string().min(11).max(11).required(),
  price: Joi.string().required(),
});

export const update = Joi.object<IUser>({
  firstName: Joi.string().min(3).max(30),
  lastName: Joi.string().min(3).max(30),
  age: Joi.string(),
  birthDay: Joi.date(),
  position: Joi.string().valid(...Object.values(Position)),
  identity: Joi.string().min(11).max(11),
  price: Joi.string(),
});
