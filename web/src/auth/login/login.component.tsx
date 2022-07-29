import DisplayValidation from "../../shared/forms/display.validation";
import useLoginForm from "./useLoginForm";

// TODO : preloader
function LoginComponent() {
  console.log("LoginComponent");
  const form = useLoginForm();

  return (
    <div className="col-md-offset-3 col-md-6">
      <form className="form-horizontal" onSubmit={form.handleSubmit}>
        <h4>Use a local account to log in.</h4>
        <hr />

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="login">
            Login, Email or Phone
          </label>
            <div className="col-md-10">
              <input className="form-control" {...form.registerField('login')} />
              <DisplayValidation field="login" error={form.errors?.login} />
            </div>
        </div>

        <div className="form-group row">
          <label className="col-md-2 control-label" htmlFor="password">
            Password
          </label>
            <div className="col-md-10">
              <input className="form-control" {...form.registerField('password')} />
              <DisplayValidation field="password" error={form.errors?.password} />
            </div>
        </div>

        <DisplayValidation error={form.errors?.apiError} />

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
