import { NavigateFunction } from "react-router-dom";
import AuthApiService from "../../shared/api/auth-api.service";
import UserModel from "../../shared/models/user.model";
import UserService from "../../shared/services/user.service";

class LoginForm {
  public login: any;
  public password: any;
  public handleSubmit: any;

  constructor(
    private form: any, // TODO : типы
    private api: AuthApiService,
    private userService: UserService,
    private navigate: NavigateFunction
  ) {
    console.log("hello"); // TODO : 2 раза
    const { register, handleSubmit } = form;
    this.login = register("login");
    this.password = register("password", { required: true, minLength: 2 });
    this.handleSubmit = handleSubmit(this.#onSubmit);
  }

  #onSubmit = async (data: any) => {
    try {
      const usr = await this.api.login(data);
      this.userService.User = new UserModel(usr);
      this.navigate("/"); // TODO : это должно быть тут или выше?
    } catch (Exception) {
      alert("не подходит");
    }
  };
}

export default LoginForm;
