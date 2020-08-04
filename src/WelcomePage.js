import React from 'react'
import "./WelcomePage.css"
import { Link } from 'react-router-dom'

export default function WelcomePage() {
  return (
    <div>
      <header>
      <Link to="/LiveMenu">
        <button className="guest-pages-button">Guest Pages</button>
        </Link>
        
        <Link to="/">
          <button className="homepage-button">Home Page</button>
        </Link>

        <Link to="/BillPage">
          <button className="bill-page-button">Bill Page</button>
        </Link>

      <Link to="/EditorMain">
        <button className="admin-button">Admin Pages</button>
        </Link>
      </header>
      
    </div>
  )
}
