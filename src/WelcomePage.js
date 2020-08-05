import React from 'react'
import "./WelcomePage.css"
import { Link } from 'react-router-dom'

export default function WelcomePage() {
  return (
    <div>
      <header>
        <h1>Restaurant App</h1>
<div className="nav-buttons">
        <Link to="/LiveMenu">
        <button className="guest-pages-button">Menu</button>
        </Link>


      <Link to="/BillPage">
      <button className="bill-page-button">Bill Page</button>
    </Link>

      <Link to="/PasswordValidator">
        <button className="admin-button">Admin</button>
          </Link>
          </div>
      </header>


      
      
    </div>
  )
}
