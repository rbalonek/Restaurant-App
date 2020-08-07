import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem(props) {
  const { item, type } = props;
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
