import { BaseApiService } from "./base-api.service";
import UserModel from "../models/user.model";

class AuthApiService extends BaseApiService {
  constructor() {
    super("Auth");
  }

  public async register(model: any) {
    return this.post<UserModel>("Register", model.value);
  }

  public async login(model: any) {
    return this.post<UserModel>("Login", model);
  }

  public async logOut() {
    return await this.post<void>("LogOut", {});
  }
}

export default AuthApiService;
