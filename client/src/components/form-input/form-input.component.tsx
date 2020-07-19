import React, { ChangeEvent } from "react";

import "./form-input.styles.scss";

const FormInput: React.FunctionComponent<props> = ({
  label,
  ...otherProps
}) => (
  <div className="group">
    <input className="form-input" {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {" "}
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

interface props {
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name: string;
  type: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
