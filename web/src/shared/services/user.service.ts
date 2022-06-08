import UserModel from "../models/user.model";

class UserService {
  private _user: UserModel | null = null;

  public get User(): UserModel | null {
    if (this._user != null) return this._user;

    const usr = localStorage.getItem("user");
    if (usr != null) this._user = new UserModel(JSON.parse(usr)) ;

    return this._user;
  }

  public set User(val: UserModel | null) {
    if (val == null) localStorage.removeItem("user");
    else localStorage.setItem("user", JSON.stringify(val));

    this._user = val;
  }

  constructor() {}

  get isAuth(): boolean {
    return this.User != null && this.User.userName != null;
  }

  hasRole(roleId: number): boolean {
    if (!this.User || !this.isAuth || this.User.roles == null) return false;
    return this.User.roles.indexOf(roleId) > -1;
  }
}

export default UserService;