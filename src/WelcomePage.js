import React, { useEffect, useState } from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

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
          <Link to="/BillPage" className="bill-page">
            <ShoppingCartRoundedIcon />
          </Link>

          <Link to="/LiveMenu" className="menu-icon">
            <HomeRoundedIcon />
          </Link>

          <Link to="/PasswordValidator" className="lock-icon">
            <LockOpenRoundedIcon />
          </Link>
        </div>
      </header>
    </div>
  );
}
