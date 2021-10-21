import React from "react";
import "./style.css";
import Error from "./Group_345.png";

interface IUserNameInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  name?: string;
  errorLabel?: string;
}

export const UserNameInput: React.FC<IUserNameInput> = ({
  label,
  value,
  onChange,
  placeholder,
  errorLabel,
}) => {
  return (
    <div className="container">
      <label>
        <p className="labelText">{label}</p>
        <img src={Error} className="imgError"></img>
        <input
          className="input _error"
          type={value}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <p className="textError">{errorLabel}</p>
      </label>
    </div>
  );
};
