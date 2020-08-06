import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./CreateBillItem.css"

//Icons
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

///Button
import SaveButton from "../Editor_Components/SaveButton"

function CreateBillItem(props) {
// console.log(props)
  
  // const [name, updateName] = useState('');
  // const [price, updatePrice] = useState('');

  const { id, type } = useParams();
  // console.log(useParams())
  const name = `${id}`
  const price = `${type}`

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    // updateName('');
    
    // updatePrice('');
    
    ActionLink()
  };
 //

  function ActionLink() {
    window.location.assign("/LiveMenu")
  }

  return (
    <div> 
    <Link to="/BillPage" className="bill-page">
    <ShoppingCartRoundedIcon />
    </Link>

  <Link to="/LiveMenu" className="menu-icon">
    <HomeRoundedIcon />
    </Link>
    
    <h1>{id} ${type}</h1>
      <form
        className="create-bill-form"
        onSubmit={handleSubmit}>
        <h2>Confirm Order</h2>
        
      <label htmlFor="name"></label>
        <input
          className="to-hide"
        type="Text"
        id="name"
        // onChange={(e) => updateName(e.target.value)}
        value={name}
      /> <br/> <br/>

      <label htmlFor="price"></label>
        <input
        className="to-hide"
        type="Text"
        id="price"
        // onChange={(e) => updatePrice(e.target.value)}
        value={price}
        /> <br/> <br/>
        <input type="submit" value="Confirm" />
        
      </form>
     
      </div>
  );
}

export default CreateBillItem;


//<input type="submit" value="Confirm" />


// function CreateBillItem(props) {
//   console.log(props)
//   const [name, updateName] = useState('');
//   const [price, updatePrice] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const data =
//       await axios.post(
//       'https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill',
//       {
//         fields: {
//           name: name,      
//           price: price,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     props.invokeFetch(!props.fetchEntries); //needed to pass these using props. beause needed on both component pages.
//     updateName('');
    
//     updatePrice('');
    
//     ActionLink()
//   };
//  //

//   function ActionLink() {
//     window.location.assign("/LiveMenu")
//   }

//   return (
//     <div> 
//     <h1>{name}{price}</h1>
//     <form onSubmit={handleSubmit}>
//       <h2>Confirm Order</h2>
//       <label htmlFor="name">name</label>
//       <input
//         type="Text"
//         id="name"
//         onChange={(e) => updateName(e.target.value)}
//         value={name}
//       /> <br/> <br/>

//       <label htmlFor="price">price</label>
//       <input
//         type="Text"
//         id="price"
//         onChange={(e) => updatePrice(e.target.value)}
//         value={price}
//         /> <br/> <br/>

//       <input type="submit" value="Confirm" />
//       </form>
        
//       </div>
//   );
// }

// export default CreateBillItem;