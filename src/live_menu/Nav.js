import React from 'react'
import Scrollspy from './lib/scrollspy'
import "../App.css"

const Nav = () => (
  <nav className="nav">
    <div className="nav__item nav__item--inverse">
      
    </div>
    <Scrollspy
      items={ ['section-1', 'section-2', 'section-3', 'section-4'] }
      currentClassName="nav__item--active"
      className="nav__inner"
      style={{
        fontWeight: 300
      }}
      offset={ -50 }
      // onUpdate={
      //   (el) => {
      //     console.log(el)
      //   }
      // }
    >
      <li className="nav__item"><a href="#section-1" className="nav__link">Apps</a></li>
      <li className="nav__item"><a href="#section-2" className="nav__link">Main Course</a></li>
      <li className="nav__item"><a href="#section-3" className="nav__link">Drinks</a></li>
      <li className="nav__item"><a href="#section-4" className="nav__link">Wine / Cocktails</a></li>
    </Scrollspy>
  </nav>
)

export default Nav

// <section className="section" id="section-1"></section>
// <section className="section" id="section-2"></section>
// <section className="section" id="section-3"></section>