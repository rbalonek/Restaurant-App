import React from 'react'
import "./LiveMenu.css"

/// Menu Components
import GuestMenuItem from "./Guest_Components/GuestMenuItem"
import GuestDrinkItem from "./Guest_Components/GuestDrinkItem"
import Nav from "./Nav"


export default function LiveMenu(props) {
  return (
    <div>
     <Nav />
  
    <section className="section" id="section-1"> 
        <h1 className="menu-titles">Apps</h1>
      {props.apps.map((app) => <GuestMenuItem key={app.id} item={app} type="app" />)}
      </section>
      
      <section className="section" id="section-2">
        <h1 className="menu-titles">Mains</h1>
      {props.mains.map((main) => <GuestMenuItem key={main.id} item={main} type="main" />)}
      </section>

      <section className="section" id="section-3">
        <h1 className="menu-titles">Drinks</h1>
      {props.drinks.map((drink) => <GuestDrinkItem key={drink.id} item={drink} type="drink" />)}
      </section>

      <section className="section" id="section-4">
      <h1 className="menu-titles">Wine / Cocktails</h1>
        {props.alcoholDrinks.map((alcoholDrink) => <GuestDrinkItem key={alcoholDrink.id} item={alcoholDrink} type="alcoholDrink" />)}
        </section>
    </div>
  )
}
