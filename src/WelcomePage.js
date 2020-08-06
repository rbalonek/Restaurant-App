import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';

export default function WelcomePage() {
  // const [username, updateUsername] = useState('')
  // //Random # Cabana # let result = Math.floor(Math.random() * (10) + animeMin)
  // useEffect(() => {
  //   //alert("ah!")//
  //   var username = prompt(`Welcome to Cabana #${result}! Please enter your name`)
  //   return updateUsername
  // }, []);

  return (
    <div>
      <header>
        <div className="nav-buttons">
          <Link to="/LiveMenu">
            <button className="guest-pages-button">Menu</button>
          </Link>

          <Link to="/BillPage" className="bill-page">
            <button className="bill-page-button">Bill Page</button>
          </Link>

          <Link to="/PasswordValidator" className="lock-icon">
          <LockOpenRoundedIcon />
          </Link>
        </div>
      </header>
    </div>
  );
}
