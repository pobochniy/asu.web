import { UserProfileModel } from "./user-profile.model";

/** Пользователь */
class UserModel extends UserProfileModel {

  /** Список ролей */
  public roles: number[] = [];

  constructor(obj: any = {}) {
    super(obj);
    this.roles = obj.roles;
  }
}

export default UserModel;