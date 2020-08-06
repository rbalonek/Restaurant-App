import React from "react";
import { Link } from "react-router-dom"


export default function MenuItem(props) {
  const { item, type } = props
  // console.log({item})
  return (
    <Link to={`/EditMenu/${type}/${item.id}`}>
      <p key={item.fields.name}>
      {item.fields.name}
      <br></br>
      {item.fields.notes}
      <br></br>
      {item.fields.price}
      </p>
      
    </Link>
  );
}
// <img src={item.fields.imglink} />