import React from "react";

import "./custom-button.styles.scss";

const CustomButton: React.FunctionComponent<props> = ({
  children,
  googleSignin,
  ...otherProps
}) => (
  <button
    className={`${googleSignin ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

interface props {
  children: string;
  googleSignin?: boolean;
  onClick?: () => Promise<firebase.auth.UserCredential>;
  type?: "button" | "submit" | "reset";
}
