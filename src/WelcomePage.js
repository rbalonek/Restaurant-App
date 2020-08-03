import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
  return (
    <div>
      <Link to="/LiveMenu">
        <button>Guest Pages</button>
      </Link>
      <Link to="/EditorMain">
        <button>Admin Pages</button>
        </Link>
    </div>
  )
}
