import React, { useState } from "react";
import "./style.css";
import { UserNameInput } from "../atoms/Label/UserNameInput";
import { Button } from "../atoms/Button/Button";

function LoginForm(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [userNameError, setUserNameError] = useState("Something goes wrong");

  // const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  //   const re =
  //     /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
  //   if (!re.test(String(e.target.value).toLowerCase())) {
  //     setUserNameError("Something goes wrong");
  //   } else {
  //     setUserNameError("");
  //   }
  // };

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form>
      <div className="LoginForm">
        <UserNameInput
          label="User name"
          placeholder="Input user name"
          value={inputValue}
          onChange={setInputValue}
          errorLabel="Something goes wrong"
          // (e) => nameHandler(e)
        />
        <Button onClick={clickHandler} name="Log in" />
      </div>
    </form>
  );
}

export default LoginForm;
