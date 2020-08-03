import React from "react";
import { Link } from "react-router-dom"

export default function MenuItem(props) {
  const { item, type } = props
  return (
    <Link to={`/EditMenu/${type}/${item.id}`}>
      <p key={item.fields.Name}>
      {item.fields.Name}
      <br></br>
      {item.fields.Notes}
      <br></br>
      {item.fields.Price}
    </p>
    </Link>
  );
}
