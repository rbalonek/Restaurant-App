import React from "react";
import "./CreateBillItem.css"

export default function BillItems(props) {
  const { item } = props;
  return (
    <div>
      
      <p key={item.fields.name}>
        {item.fields.name} ${item.fields.price}
      </p>
    </div>
  );
}
