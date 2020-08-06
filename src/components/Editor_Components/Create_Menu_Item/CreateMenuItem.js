import React, { useState } from "react";
import axios from "axios";
import "./CreateMenuItem.css"

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import {Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
// import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      backgroundColor: 'white',
      marginTop: 50,
      
    }, 
    
  },
}));

function CreateMenuItem(props) {
  const classes = useStyles();
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
    <Fab color="secondary" aria-label="edit">
    <EditIcon />
  </Fab>
     </Link>
    


      <form
        className={classes.root}
        noValidate autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          label="Item Name"
          onChange={(e) => updateName(e.target.value)}
          value={name}
        />
        
        <TextField
          id="price"
          label="Price"
          onChange={(e) => updatePrice(e.target.value)}
          value={price}
        />


        <TextField
        id="imglink"
        onChange={(e) => updateImglink(e.target.value)}
        value={imglink}
          label="Image Link"
          variant="outlined" />
        
        <TextField
          id="notes"
          onChange={(e) => updateNotes(e.target.value)}
          value={notes}
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
        />

       
        <select
          onChange={(e) => updateTable(e.target.value)} >
              <option value="apps">Choose Course</option>
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
