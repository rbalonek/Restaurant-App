import React from 'react'
import GuestNavBar from "../components/Guest_Components/GuestNavBar"
import "./LiveMenu.css"

/// Menu Components
import GuestMenuItem from "./Guest_Components/GuestMenuItem"
import GuestDrinkItem from "./Guest_Components/GuestDrinkItem"


export default function LiveMenu(props) {
  return (
    <div>
     <header>
        <GuestNavBar />
      </header>

      <h1 className="menu-titles">Apps</h1>
      {props.apps.map((app) => <GuestMenuItem key={app.id} item={app} type="app" />)}
      
      <h1 className="menu-titles">Mains</h1>
      {props.mains.map((main) => <GuestMenuItem key={main.id} item={main} type="main" />)}
      
      <h1 className="menu-titles">Drinks</h1>
      {props.drinks.map((drink) => <GuestDrinkItem key={drink.id} item={drink} type="drink" />)}
    
      <h1 className="menu-titles">Wine / Cocktails</h1>
      {props.alcoholDrinks.map((alcoholDrink) => <GuestDrinkItem key={alcoholDrink.id} item={alcoholDrink} type="alcoholDrink" />)}
    </div>
  )
}
