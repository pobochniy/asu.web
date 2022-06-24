import { NavigateFunction } from "react-router-dom";
import { ModelStateDictionary } from "../../shared/api-base/types";
import AuthApiService from "../../shared/api/auth-api.service";
import ValidationException from "../../shared/Exceptions/validation.exception";
import UserModel from "../../shared/models/user.model";
import UserService from "../../shared/services/user.service";

class LoginForm {
  public login: any;
  public password: any;
  public handleSubmit: any;
  public setError: any;

  constructor(
    private form: any, // TODO : типы
    private api: AuthApiService,
    private userService: UserService,
    private navigate: NavigateFunction
  ) {
    console.log("hello"); // TODO : 2 раза
    const { register, handleSubmit, setError } = form;
    this.handleSubmit = handleSubmit(this.#onSubmit);
    this.setError = setError;

    this.login = register("login", {
      required: true,
      minLength: { value: 3, message: "3" },
      maxLength: { value: 20, message: "20" },
    });
    this.password = register("password", {
      required: true,
      minLength: { value: 3, message: "3" },
      maxLength: { value: 20, message: "20" },
    });
  }

  #onSubmit = async (data: any) => {
    try {
      const usr = await this.api.login(data);
      this.userService.User = new UserModel(usr);
      this.navigate("/"); // TODO : это должно быть тут или выше?
    } catch (ex) {
      if (ex instanceof ValidationException) {
        this.#setValidationErrors(Object.keys(ex.modelState), ex.modelState);
      }

      this.#setApiError(ex?.message);
    }
  };

  #setValidationErrors(keys: string[], err: ModelStateDictionary) {
    const that = this;
    keys.map((key) => {
      err[key].map((msg) => {
        const jsField = key.charAt(0).toLowerCase() + key.slice(1); // TODO : с бекенда приходит с большой буквы
        // @ts-ignore
        that[jsField]
          ? that.setError(jsField, { type: "custom", message: msg })
          : that.setError("apiError", { message: msg });
      });
    });
  }

  #setApiError(msg: string){
    this.setError("apiError", { message: msg || 'Упс' });
  }
}

export default LoginForm;
