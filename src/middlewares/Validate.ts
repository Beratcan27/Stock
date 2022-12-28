import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i: { message: any }) => i.message).join(",");
      res.status(httpStatus.BAD_REQUEST).json({ error: message });
    }
  };
