import {
  RegisterOptions,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ModelStateDictionary } from "../../shared/api-base/types";
import ValidationException from "../../shared/exceptions/validation.exception";
import { useApi } from "../../shared/contexts/api.provider";
import { useUser } from "../../shared/contexts/user.provider";

function useLoginForm() {
  const hookForm = useForm();
  const api = useApi().authApi;
  const user = useUser();
  const navigate = useNavigate();
  const fields = useLoginFields();

  const handleSubmit = hookForm.handleSubmit(async (data: any) => {
    try {
      const apiUsr = await api.login(data);
      user.setUser(apiUsr);
      navigate("/");
    } catch (ex) {
      if (ex instanceof ValidationException) {
        setValidationErrors(Object.keys(ex.modelState), ex.modelState);
      }

      setApiError(ex?.message);
    }
  });

  const setValidationErrors = function (
    keys: string[],
    err: ModelStateDictionary
  ) {
    const that = this;
    keys.map((key) => {
      err[key].map((msg) => {
        const jsField = key.charAt(0).toLowerCase() + key.slice(1); // TODO : с бекенда приходит с большой буквы
        // @ts-ignore
        that[jsField]
          ? that.hookForm.setError(jsField, { type: "custom", message: msg })
          : that.hookForm.setError("apiError", { message: msg });
      });
    });
  };

  const setApiError = function (msg: string) {
    hookForm.setError("apiError", { message: msg || "Упс" });
  };

  const registerField = function (fieldName: string) {
    return hookForm.register(fieldName, fields[fieldName]);
  };

  return {
    registerField,
    handleSubmit,
    errors: hookForm.formState.errors,
  };
}

const useLoginFields = function () {
  let fieldSet: FormFields = {};
  fieldSet["login"] = {
    required: true,
    minLength: { value: 3, message: "3" },
    maxLength: { value: 20, message: "20" },
  };
  fieldSet["password"] = {
    required: true,
    minLength: { value: 3, message: "3" },
    maxLength: { value: 20, message: "20" },
  };

  return fieldSet;
};

type FormFields = {
  [name: string]: RegisterOptions;
};

export default useLoginForm;
