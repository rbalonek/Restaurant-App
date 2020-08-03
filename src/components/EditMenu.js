import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";




export default function EditMenu(props) {
  // console.log(props.apps)
  const [Name, updateName] = useState('');
  const [Notes, updateNotes] = useState('');
  const [Price, updatePrice] = useState('');

  const { id, type } = useParams();
  useEffect(() => {
    const items = type === "app" ? props.apps : props.mains
    const menuItem = items.find(item => item.id === id)
    updateName(menuItem.fields.Name)
    updateNotes(menuItem.fields.Notes)
    updatePrice(menuItem.fields.Price)
  },[] ) 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const table = type === "app" ? "Apps" : "Mains"
    const data = await axios.put(`https://api.airtable.com/v0/app9S6k06MQoTSJbG/${table}/${id}`, {
      fields: {
        Name: Name,
        Notes: Notes,
        Price: Price
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    // {e =>  window.location.href='/MainMenu'}
  }


  return (
    
    <div>
     
      <form onSubmit={handleSubmit}>
        <h2>Edit Menu</h2>
        <h1>{Name}<br />{Notes}<br />{Price}<br /></h1>
        
        <label htmlFor="Name">Name</label>
        <input type="Text" id="Name" onChange={e => updateName(e.target.value)} value={Name} />
        
        <label htmlFor="Notes">Notes</label>
        <input type="Text" id="Notes" onChange={e => updateNotes(e.target.value)} value={Notes} /> <br /><br />
        
        <label htmlFor="Price">Price</label>
        <input type="Text" id="Price" onChange={e => updatePrice(e.target.value)} value={Price} />
        
        <input type="submit" value="Update Item" />
          
      </form>

    </div>
  );
}