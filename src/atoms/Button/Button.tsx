import React from "react";
import "./style.css";

interface IButtonName {
  name: string;
  onClick: any;
  disabled?: false | true;
}

export const Button: React.FC<IButtonName> = ({ name, onClick, disabled }) => {
  return (
    <button className="LogInButton _disabled" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
