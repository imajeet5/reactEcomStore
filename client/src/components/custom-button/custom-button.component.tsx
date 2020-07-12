import React from "react";

import "./custom-button.styles.scss";

const CustomButton: React.FunctionComponent<props> = ({
  children,
  ...otherProps
}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;

interface props {
  children: string;
  onClick?: () => Promise<firebase.auth.UserCredential>;
  type?: "button" | "submit" | "reset";
}
