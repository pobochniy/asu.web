import { UserProfileModel } from "./user-profile.model";

/** Пользователь */
class UserModel extends UserProfileModel {

  /** Список ролей */
  public roles: number[] = [];
}

export default UserModel;