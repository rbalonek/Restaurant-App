import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div>
        <div className="header-links">
          
          <Link to="/">
            <button className="homepage-button">Home Page</button>
          </Link>

          <Link to="/MainMenu">
            <button className="form-button">Edit Menu </button>
          </Link>

          
         

        </div>
    </div>
  );
}
