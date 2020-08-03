import React from 'react'
import MenuItem from "./MenuItem"
import DrinkItem from "./DrinkItem"
import { identifier } from '@babel/types'


export default function MainMenu(props) {
  return (
    
    <div>
      <h1>Main Menu Edit</h1>
      <h1>Apps</h1>
      {props.apps.map((app) => <MenuItem key={app.id} item={app} type="app" />)}
      <button>Add App</button>
      <h1>Mains</h1>
      {props.mains.map((main) => <MenuItem key={main.id} item={main} type="main" />)}
      <button>Add Main</button>
      <h1>Drinks</h1>
      {props.drinks.map((drink) => <DrinkItem key={drink.id} item={drink} type="drink" />)}
      <button>Add Drink</button>
      <h1>Wine / Cocktails</h1>
      {props.alcoholDrinks.map((alcohol) => <DrinkItem key={alcohol.id} item={alcohol} type="alcohol" />)}
      <button>Add Alcohol Drink</button>
    </div>
  )
}

