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

  let errMsg: string | undefined;// | FieldErrorsImpl<DeepRequired<any>> = "";
  switch (props.error.type) {
    case undefined:
    case "custom":
      errMsg = props.error.message;
      break;
    case "required":
      errMsg = props.field + " field is required";
      break;
    case "minLength":
      errMsg =
        props.field +
        " field min length " +
        (props.error.message?.length && props.error.message);
      break;
    case "maxLength":
      errMsg =
        props.field +
        " field max length " +
        (props.error.message?.length && props.error.message);
      break;
    default:
      throw new Error("validation type is unknown");
  }

  return <div className="error-msg">{errMsg+''}</div>;
};

export default DisplayValidation;
