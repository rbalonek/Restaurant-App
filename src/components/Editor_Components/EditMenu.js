import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Create_Menu_Item/CreateMenuItem.css"
//components
import DeleteButton from "./DeleteButton"





export default function EditMenu(props) {
  // console.log(props.apps)
  const [name, updateName] = useState('');
  const [notes, updateNotes] = useState('');
  const [price, updatePrice] = useState('');
  const [imglink, updateImglink] = useState('');
  

  const { id, type } = useParams();
  useEffect(() => {
    const items = type === "app" ? props.apps : props.mains;
    const menuItem = items.find(item => item.id === id)
    updateName(menuItem.fields.name)
    updateNotes(menuItem.fields.notes)
    updatePrice(menuItem.fields.price)
    updateImglink(menuItem.fields.imglink)
  },[] ) 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const table = type === "app" ? "apps" : "mains"
    const data = await axios.put(`https://api.airtable.com/v0/app9S6k06MQoTSJbG/${table}/${id}`, {
      fields: {
        name: name,
        notes: notes,
        price: price,
        imglink: imglink,
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    ActionLink()
  }
  function ActionLink() {
    window.location.assign("/MainMenuEditor")
  }

  return (
    
    <div>
      
    <Link to="/MainMenuEditor">
    <button className="edit-menu-button">Edit Menu</button>
     </Link>
     <Link to="/CreateMenuItem">
     <button className="create-menu-item-button">Create Menu Item</button>
     </Link>
     
      <form onSubmit={handleSubmit}>
        <h2>Edit Menu</h2>
        <img src={imglink} width="200" height="200" alt={imglink}  />
        <h1>{name}<br />{notes}<br />{price}<br /></h1>
        
        
        <label htmlFor="name">Name</label>
        <input type="Text" id="name" onChange={e => updateName(e.target.value)} value={name} />
        
        <label htmlFor="notes">Notes</label>
        <input type="Text" id="notes" onChange={e => updateNotes(e.target.value)} value={notes} /> <br /><br />
        
        <label htmlFor="price">Price</label>
        <input type="Text" id="price" onChange={e => updatePrice(e.target.value)} value={price} />

        <label htmlFor="imglink">Image Link</label>
        <input type="Text" id="imglink" onChange={e => updateImglink(e.target.value)} value={imglink} />
        
        <input type="submit" value="Update Item" />
        <DeleteButton
          id={id}
          type={type+'s'}
        />

          
      </form>

    </div>
  );
}