import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import UserService from "../services/User";
import httpStatus from "http-status";

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const isThere = await UserService.findOne(req.body._id);
      if (isThere) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User is already exist" });
      }

      const data = req.body;
      const user = new User(data);
      const { password } = data;
      await UserService.create(user);
      return res
        .status(httpStatus.CREATED)
        .json({ message: "User Created", user });
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const users = await UserService.getList();
      return res.status(httpStatus.OK).json({ users });
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }
  async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.findOne({ _id: id });
      return res.status(httpStatus.OK).json(user);
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      await UserService.update(data);
      return res
        .status(httpStatus.OK)
        .json({ message: "User updated successfully" });
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const user = await UserService.findOne({ _id: req.params.id });
      if (!user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "User not found" });
      }
      await UserService.delete(req.params.id);
      return res
        .status(httpStatus.OK)
        .json({ message: "User deleted successfully" });
    } catch (error: any) {
      res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }
}

export default new UserController();
