import React from "react";


export default function GuestNavBar() {
  return (
    <div>
      <header>
        <Link to="/">
          <button className="homepage-button">Home Page</button>
        </Link>

        <Link to="/BillPage">
          <button>Bill Page</button>
        </Link>
      </header>
    </div>
  );
}
