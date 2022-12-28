import BaseService from "./Base";
import BaseModel from "../models/Auth";

class AuthService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

export default new AuthService();
