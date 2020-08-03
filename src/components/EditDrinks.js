import React, { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";


///Components
import DeleteButton from './DeleteButton'



export default function EditDrinks(props) {
  // console.log(props.apps)
  const [name, updateName] = useState('');
  const [notes, updateNotes] = useState('');
  const [price, updatePrice] = useState('');

  const { id, type } = useParams();
  useEffect(() => {
    const items = type === "drink" ? props.drinks : props.alcoholDrinks;
    const drinkItem = items.find((item) => item.id === id);
    updateName(drinkItem.fields.name);
    updateNotes(drinkItem.fields.notes);
    updatePrice(drinkItem.fields.price);
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const table = type === "drink" ? "drinks" : "alcoholDrinks";
    const data = await axios.put(
      `https://api.airtable.com/v0/app9S6k06MQoTSJbG/${table}/${id}`,
      {
        fields: {
          name: name,
          notes: notes,
          price: price,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    ActionLink()
  };

function ActionLink() {
  window.location.assign("/MainMenu")
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Menu</h2>
        <h1>
          {name}
          <br />
          {notes}
          <br />
          {price}
          <br />
        </h1>
        <label htmlFor="name">Name</label>
        <input
          type="Text"
          id="name"
          onChange={(e) => updateName(e.target.value)}
          value={name}
        />
        <label htmlFor="notes">Notes</label>
        <input
          type="Text"
          id="notes"
          onChange={(e) => updateNotes(e.target.value)} value={notes}/>{" "} <br /> <br />
        
        <label htmlFor="price">Price</label>
        <input
          type="Text"
          id="price"
          onChange={(e) => updatePrice(e.target.value)}
          value={price}
        />
        <input type="submit" />
        <DeleteButton
          id={id}
          type={type+'s'}
        />
      </form>
    </div>
  );
}