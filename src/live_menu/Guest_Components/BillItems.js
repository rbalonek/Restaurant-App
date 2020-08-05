import React from "react";


export default function BillItems(props) {
  const { item, type } = props
  // console.log(item)
  // console.log(parseFloat({ item.fields.price }))
  return (
    <div>
    <p key={item.fields.name}>
    {item.fields.name} $
    {item.fields.price}
  </p>
    </div>
  );
}
