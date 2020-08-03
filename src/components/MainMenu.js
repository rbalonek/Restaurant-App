import React from 'react'
import MenuItem from "./MenuItem"
import { identifier } from '@babel/types'


export default function MainMenu(props) {
  return (
    
    <div>
      <h1>Main Menu Edit</h1>
      <h1>Apps</h1>
      {props.apps.map((app) => <MenuItem key={app.id} item={app} type="app"/>)}
      <h1>Mains</h1>
      {props.mains.map((main) => <MenuItem key={main.id} item={main} type="main"/>)}
    </div>
  )
}

