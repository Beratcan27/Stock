import { Request, Response, NextFunction } from "express";

export default class ErrorHandler {
  static handle = () => {
    return async (
      err: Error,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      res.status(500).send({
        success: false,
        message: err.message,

        stack: err.stack,
      });
    };
  };
}

