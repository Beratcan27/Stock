import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";
import AuthService from "../services/Auth";
import Auth from "../models/Auth";

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    const { email, password, passwordAgain } = req.body;
    if (password !== passwordAgain) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "passwords are not same , please check out" });
    }
    const data = req.body;
    const auth = new Auth(data);

    await AuthService.create(auth);
    
    return res
      .status(httpStatus.CREATED)
      .json({ message: "User Created", auth });

      
  }
}
export default new AuthController();
