import React from "react";
import { DeepRequired, FieldError, FieldErrorsImpl, FieldValues } from "react-hook-form";

type DisplayValidationProps = {
  field?: string;
  //error: FieldError | FieldErrorsImpl<DeepRequired<any>> | undefined//DisplayError | undefined;
  error: DisplayError | undefined | any;
};

type DisplayError = {
  type: "required" | "minLength" | "maxLength" | "custom" | "apiError";
  message: string;
};

const DisplayValidation = (props: DisplayValidationProps) => {
  if (!props.error) return <></>;

  const errMsg = buildErrMsg(props.error.type, props.error.message, props.field, props.error);

  return <div className="error-msg">{errMsg+''}</div>;
};

const buildErrMsg = (type: string, message: string, field: string | undefined, error: DisplayError | undefined | any) =>{
  switch (type) {
    case undefined:
    case "custom":
      return message;
    case "required":
      return field + " field is required";
    case "minLength":
      return `${field} field min length ${message?.length && error.message}`;
    case "maxLength":
      return `${field} field max length ${error.message?.length && error.message}`;
    default:
      throw new Error("validation type is unknown");
  }
}

export default DisplayValidation;
