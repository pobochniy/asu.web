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
  public formState: any;
  public setError: any;
  public summaryErrors: string[] = [];

  constructor(
    private form: any, // TODO : типы
    private api: AuthApiService,
    private userService: UserService,
    private navigate: NavigateFunction
  ) {
    console.log("hello"); // TODO : 2 раза
    const { register, handleSubmit, formState, setError } = form;
    this.handleSubmit = handleSubmit(this.#onSubmit);
    this.formState = formState;
    this.setError = setError;

    this.login = register("login", {
      required: true,
      minLength: { value: 2, message: "2" },
      maxLength: { value: 6, message: "6" },
    });
    this.password = register("password", {
      required: true,
      minLength: { value: 3, message: "3" },
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
    }
  };

  #setValidationErrors(keys: string[], err: ModelStateDictionary) {
    this.summaryErrors = [];
    const that = this;
    keys.map(key => {
      err[key].map(msg => {
        //const jsField = key.charAt(0).toLowerCase() + key.slice(1); // TODO : с бекенда приходит с большой буквы
        const jsField = key;
        // @ts-ignore
        that[jsField]
          ? that.setError(jsField, { type: "custom", message: msg })
          : that.summaryErrors.push(msg);
      });
    });
  }
}

export default LoginForm;
