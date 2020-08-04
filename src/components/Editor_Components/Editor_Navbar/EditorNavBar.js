import React from "react";
import { Link } from "react-router-dom";

export default function EditorNavBar() {
  return (
    <div>
        <div className="header-links">
          
      

          <Link to="/MainMenuEditor">
            <button className="form-button">Edit Menu </button>
          </Link>

        <Link to="/CreateMenuItem">
          <button>Create Menu Item</button>
        </Link>


          
         

        </div>
    </div>
  );
}
