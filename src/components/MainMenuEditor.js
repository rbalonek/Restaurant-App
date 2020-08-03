import React from 'react'
import MenuItem from "./MenuItem"
import DrinkItem from "./DrinkItem"
import EditorHeader from "./EditorHeader"



export default function MainMenuEditor(props) {
  return (
    
    <div>
      <header> <EditorHeader /> </header>
      
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

