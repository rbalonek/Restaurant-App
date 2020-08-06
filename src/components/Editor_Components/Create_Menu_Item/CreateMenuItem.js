import React, { useState } from "react";
import axios from "axios";
import "./CreateMenuItem.css"

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

///Components
import {Link } from "react-router-dom"

function CreateMenuItem(props) {
  const [name, updateName] = useState('');
  const [notes, updateNotes] = useState('');
  const [price, updatePrice] = useState('');
  const [table, updateTable] = useState('');
  const [imglink, updateImglink] = useState('');

  const [confirmation, updateConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data =
      await axios.post(
      `https://api.airtable.com/v0/app9S6k06MQoTSJbG/${table}`,
      {
        fields: {
          name: name,
          notes: notes,
          price: price,
          imglink: imglink,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.invokeFetch(!props.fetchEntries); //needed to pass these using props. beause needed on both component pages.
    updateName('');
    updateNotes('');
    updatePrice('');
    updateTable('');
    updateImglink('');
    updateConfirmation('Added to menu!') //// Why doesn't this do the thing?
    // confirm()
  };
 
  // let confirm = () => { confirmation }

  return (
    <div> 
      <Link to="/LiveMenu" className="menu-icon-editor">
          <HomeRoundedIcon />
        </Link>
      
    <Link to="/MainMenuEditor">
    <button>Edit Menu</button>
     </Link>
     <Link to="/CreateMenuItem">
     <button className="create-menu-item-button">Create Menu Item</button>
      </Link>
      
    <form onSubmit={handleSubmit}>
      <h2>Add New Menu Item</h2>
      <label htmlFor="name">name</label>
      <input
        type="Text"
        id="name"
        onChange={(e) => updateName(e.target.value)}
        value={name}
      /> <br/> <br/>

      <label htmlFor="price">price</label>
      <input
        type="Text"
        id="price"
        onChange={(e) => updatePrice(e.target.value)}
        value={price}
        /> <br/> <br/>

        <label htmlFor="imglink">Image Link</label>
        <input
        type="Text"
        id="imglink"
        onChange={(e) => updateImglink(e.target.value)}
        value={imglink}
      /> <br/> <br/>

      <label htmlFor="notes">notes</label> <br />
      <textarea
        name="notes"
        id="notes"
        onChange={(e) => updateNotes(e.target.value)}
        value={notes}
        ></textarea>
        <br />

        Course:
      <select onChange={(e) => updateTable(e.target.value)} >
            <option value="apps">Appetizer</option>
            <option value="mains">Entree</option>
            <option value="drinks">Drink</option>
            <option value="alcoholDrinks">Alcohol</option>
          </select>
         <br />  <br />
      <input type="submit" value="Submit Info" />
      
          
       
      </form>
        <h3>{confirmation}</h3>
      </div>
  );
}

export default CreateMenuItem;

// <label htmlFor="table">table</label>
// <input type="Text" id="table" onChange={e => updateTable(e.target.value)} value={table} />
