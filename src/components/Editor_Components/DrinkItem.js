import React from "react";
import { Link } from "react-router-dom";

export default function DrinkItem(props) {
  const { item, type } = props;
  return (
    <Link to={`/EditDrinks/${type}/${item.id}`}>
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
