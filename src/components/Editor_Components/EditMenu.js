import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Create_Menu_Item/CreateMenuItem.css"
//components
import DeleteButton from "./DeleteButton"

/// For Card
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,

    
    // marginLeft: 50,
    marginBottom: 50,
  },
  media: {
    height: 100,
    minWidth: 200,
    // maxHeight: 100,
    // borderRadius: 80,
  },
  items: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default function EditMenu(props) {
  const classes = useStyles();
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
      

<div className={classes.items}>
<Card className={classes.root}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image={imglink}
      title={name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {price}, {notes}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</div>


     
      <form onSubmit={handleSubmit}>
       
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


// <div className={classes.items}>
// <Card className={classes.root}>
//   <CardActionArea>
//     <CardMedia
//       className={classes.media}
//       image={item.fields.imglink}
//       title={item.fields.name}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="h2">
//         {item.fields.name}
//       </Typography>
//       <Typography variant="body2" color="textSecondary" component="p">
//         {item.fields.price}, {item.fields.notes}
//       </Typography>
//     </CardContent>
//   </CardActionArea>
// </Card>
// </div>

// <h2>Edit Menu</h2>
// <img src={imglink} width="200" height="200" alt={imglink}  />
// <h1>{name}<br />{notes}<br />{price}<br /></h1>