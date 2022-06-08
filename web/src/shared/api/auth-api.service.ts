import { BaseApiService } from "../api-base/base-api.service";
import UserModel from "../models/user.model";

export class AuthApiService extends BaseApiService {
  constructor() {
    super("Auth");
  }

  public async register(model: any) {
    return this.post<UserModel>("Register", model.value);
  }

  public async login(model: any) {
    return this.post<UserModel>("Login", model);;
  }

  public async logOut() {
    return this.post<void>("LogOut", {});
  }
}
