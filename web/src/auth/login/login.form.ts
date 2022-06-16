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
    this.login = register("login", {
      required: true,
      minLength: { value: 2, message: "2" },
      maxLength: { value: 6, message: "6" },
    });
    this.password = register("password", {
      required: true,
      minLength: { value: 3, message: "3" },
    });
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
