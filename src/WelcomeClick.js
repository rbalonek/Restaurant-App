import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeClick() {
  return (
    <div>
      <Link to="/LiveMenu">
        <h1>WELCOME!</h1>
        </Link>
    </div>
  )
}
