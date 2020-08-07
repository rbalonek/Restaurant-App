import React from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";

export default function WelcomePage() {
  return (
    <div>
      <Link to="/LiveMenu">
        <header>
          <div className="nav-buttons">
            <Link to="/PasswordValidator" className="lock-icon">
              <LockOpenRoundedIcon />
            </Link>
          </div>
        </header>
      </Link>
    </div>
  );
}
