import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext, ApiContext } from "../../shared/contexts/global.context";
import LoginForm from "./login.form";
import DisplayValidation from "../../shared/forms/display.validation";
import SummaryValidation from "../../shared/forms/summary.validation";

// TODO : preloader
function LoginComponent() {
  const api = useContext(ApiContext).authApi;
  const userService = useContext(UserContext);
  const hookForm = useForm();
  const form = new LoginForm(hookForm, api, userService, useNavigate());
  const {
    formState: { errors },
  } = hookForm;

  return (
    <div className="col-md-offset-3 col-md-6">
      <form className="form-horizontal" onSubmit={form.handleSubmit}>
        <h4>Use a local account to log in.</h4>
        <hr />

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="login">
            Login, Email or Phone
          </label>
          {
            <div className="col-md-10">
              <input className="form-control" {...form.login} />
              <DisplayValidation field="login" error={errors?.login} />
            </div>
          }
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="password">
            Password
          </label>
          {
            <div className="col-md-10">
              <input className="form-control" {...form.password} />
              <DisplayValidation field="password" error={errors?.password} />
            </div>
          }
        </div>

        <SummaryValidation errors={form.summaryErrors} />

        <div className="form-group row">
          <div className="col-md-offset-2 col-md-10">
            <button className="btn btn-primary">Log in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;
