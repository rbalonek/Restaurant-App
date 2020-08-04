import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
  return (
    <div>
      <header>
      <Link to="/LiveMenu">
        <button>Guest Pages</button>
        </Link>
        
        <Link to="/">
          <button className="homepage-button">Home Page</button>
        </Link>

        <Link to="/BillPage">
          <button>Bill Page</button>
        </Link>

      <Link to="/EditorMain">
        <button>Admin Pages</button>
        </Link>
      </header>
      
    </div>
  )
}
