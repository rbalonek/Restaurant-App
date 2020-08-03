import React, { useState } from "react";
import axios from "axios";

function CreateApp(props) {
  const [name, updateName] = useState('');
  const [notes, updateNotes] = useState('');
  const [price, updatePrice] = useState('');
  const [table, updateTable] = useState("");

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Menu Item</h2>
      <label htmlFor="name">name</label>
      <input
        type="Text"
        id="name"
        onChange={(e) => updateName(e.target.value)}
        value={name}
      />

      <label htmlFor="price">price</label>
      <input
        type="Text"
        id="price"
        onChange={(e) => updatePrice(e.target.value)}
        value={price}
      />

      <textarea
        name="notes"
        id="notes"
        cols="30"
        rows="5"
        onChange={(e) => updateNotes(e.target.value)}
        value={notes}
      ></textarea>
      <label htmlFor="notes">notes</label> <br />
      <input type="submit" value="Submit Info" />
      
          Course:
      <select onChange={(e) => updateTable(e.target.value)} >
            <option value="apps">Appetizer</option>
            <option value="mains">Entree</option>
            <option value="drinks">Drink</option>
            <option value="alcoholDrinks">Alcohol</option>
          </select>
       
    </form>
  );
}

export default CreateApp;

// <label htmlFor="table">table</label>
// <input type="Text" id="table" onChange={e => updateTable(e.target.value)} value={table} />