import express, { Application } from "express";
import bodyParser from "body-parser";
import UserRouter from "./routers/User";
import AuthRouter from "./routers/Auth";
import { connect } from "./config/connect";
import mongoose from "mongoose";
import Logging from "./utils/logging/Logging";

import { Request, Response, NextFunction } from "express";
import { ValidationError } from "joi";
import ErrorHandler from "./middlewares/Error";
const app: Application = express();
mongoose.set("strictQuery", false);
mongoose
  .connect(connect.mongo.url)
  .then(() => {
    Logging.info("Connect to DB");
  })
  .catch((error) => {
    Logging.error("There is a problem with mongoDB => " + error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", UserRouter);
app.use("/auth", AuthRouter);
app.use(ErrorHandler.handle());

//error
app.use("*", (req: Request, res: Response) => {
  const err = Error(`Requested path ${req.path} not found`);
  res.status(404).json({
    success: false,
    message: `Requested path ${req.path} not found`,
  });
});
app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(connect.server.port, () => {
  Logging.info("Server is running at port " + connect.server.port);
});
