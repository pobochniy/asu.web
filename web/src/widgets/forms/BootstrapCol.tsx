import React from "react";

type BootstrapColProps = {
  labelText: string;
  bWidth: string;
  children: JSX.Element | string;
};

function BootstrapCol(props: BootstrapColProps) {
  return (
    <div className={props.bWidth}>
      <label className="mr-2">{props.labelText}</label>
      <b>
        {props.children}
      </b>
    </div>
  );
}

export default BootstrapCol;
