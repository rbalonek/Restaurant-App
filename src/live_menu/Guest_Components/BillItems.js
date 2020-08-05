import React from "react";


export default function BillItems(props) {
  const { item, type } = props
  // console.log(item)
  return (
    <div>
    <p key={item.fields.name}>
    {item.fields.name} $
    {item.fields.price}
  </p>
    </div>
  );
}
