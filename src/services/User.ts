import BaseService from "./Base";
import BaseModel from "../models/User";

class UserService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

export default new UserService();
