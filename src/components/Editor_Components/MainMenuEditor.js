import React from 'react'
import MenuItem from "./MenuItem"
import DrinkItem from "./DrinkItem"
import { Link } from "react-router-dom"
import "./Create_Menu_Item/CreateMenuItem.css"

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";


export default function MainMenuEditor(props) {
  return (
    
    <div>
    <Link to="/LiveMenu" className="menu-icon-editor">
    <HomeRoundedIcon />
  </Link>
      
    <Link to="/MainMenuEditor">
    <button className="edit-menu-button">Edit Menu</button>
     </Link>
     <Link to="/CreateMenuItem">
     <button className="create-menu-item-button">Create Menu Item</button>
     </Link>
      
      <h1>Main Menu Edit</h1>
      
      <h1>Apps</h1>
      {props.apps.map((app) => <MenuItem key={app.id} item={app} type="app" />)}
      
      <h1>Mains</h1>
      {props.mains.map((main) => <MenuItem key={main.id} item={main} type="main" />)}
      
      <h1>Drinks</h1>
      {props.drinks.map((drink) => <DrinkItem key={drink.id} item={drink} type="drink" />)}
    
      <h1>Wine / Cocktails</h1>
      {props.alcoholDrinks.map((alcoholDrink) => <DrinkItem key={alcoholDrink.id} item={alcoholDrink} type="alcoholDrink" />)}
     

    </div>
  )
}

