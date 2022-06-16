import React from "react";

type DisplayValidationProps = {
  field: string;
  error: DisplayError | null;
};

type DisplayError = {
  type: "required" | "minLength" | "maxLength";
  message: string;
};

const DisplayValidation = (props: DisplayValidationProps) => {
  if (!props.error) return <></>;

  let errMsg = "";
  switch (props.error.type) {
    case "required":
      errMsg = props.field + " field is required";
      break;
    case "minLength":
      errMsg =
        props.field +
        " field min length " +
        (props.error.message.length && props.error.message);
      break;
    case "maxLength":
      errMsg =
        props.field +
        " field max length " +
        (props.error.message.length && props.error.message);
      break;
    default:
      throw new Error("validation type is unknown");
  }

  return <div className="error-msg">{errMsg}</div>;
};

export default DisplayValidation;
