import React from "react";

export default function BillTotal(props) {
  const { item } = props;

  const parseFloated = parseFloat(item.fields.price);

  return (
    <div>
      <p key={item.fields.name}>{parseFloated}</p>
    </div>
  );
}
