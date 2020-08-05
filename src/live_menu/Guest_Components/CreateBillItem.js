import React, { useState } from "react";
import axios from "axios";



function CreateBillItem(props) {
  const [name, updateName] = useState('');
  const [price, updatePrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data =
      await axios.post(
      'https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill',
      {
        fields: {
          name: name,      
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
    
    updatePrice('');
    
 
  };
 
  

  return (
    <div> 
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

      <input type="submit" value="Confirm" />
      </form>
        
      </div>
  );
}

export default CreateBillItem;