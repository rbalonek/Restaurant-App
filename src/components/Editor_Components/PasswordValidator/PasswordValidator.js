import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./PasswordValidator.css";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import LoginButton from "./LoginButton"

const confirm = (e, password, confirmPassword, updateConfirmation) => {
  e.preventDefault();
  updateConfirmation(
    password === confirmPassword ? "Valid!" : "Passwords don't match!"
  );
};

function PasswordValidator() {
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");
  const [confirmation, updateConfirmation] = useState("");

  if (confirmation === "Valid!") {
    return <Redirect to="/MainMenuEditor" />;
  }

  return (
    <div>
      <Link to="/LiveMenu" className="menu-icon">
        <HomeRoundedIcon />
      </Link>

      <div className="form">
        <h1>Login</h1>
        <form
          onSubmit={(e) =>
            confirm(e, password, confirmPassword, updateConfirmation)
          }
        >
          <input type="email" placeholder="Email" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              updatePassword(e.target.value);
            }}
            /// Add this back if you want to piss everyone off..
            // minlength = "7"
            // required
          />
          <input
            type="passwordConfirm"
            placeholder="Confirm Password"
            onChange={(e) => {
              updateConfirmPassword(e.target.value);
            }}
          />
          <LoginButton />
          <h3>{confirmation}</h3>
        </form>
      </div>
    </div>
  );
}
export default PasswordValidator;

//<input type="Submit" value="Submit" />
