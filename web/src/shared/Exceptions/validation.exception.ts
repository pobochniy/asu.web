import { ModelStateDictionary } from "../api-base/types";

class ValidationException extends Error {
  constructor(public modelState: ModelStateDictionary) {
    super();
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export default ValidationException;
