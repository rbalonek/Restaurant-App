import React from "react";
import BillItems from "../../live_menu/Guest_Components/BillItems"
import DeleteAllButton from "../../live_menu/Guest_Components/DeleteAllButton"


export default function BillPage(props) {

  // console.log(props.customerBill)
  const total = props.customerBill.reduce((sum,curr) => sum+parseFloat(curr.fields.price),0)
  return (
    <div>
      <h1>Bill</h1>
      {props.customerBill.map((app) => <BillItems key={app.id} item={app} type="app" />)}
      <h1>Total</h1>
      <p>{total}</p>
      <DeleteAllButton />
    </div>
  );
}

// {props.customerBill.flat().map((price) => <BillTotal key="billtotal" item={ price }/>)}

//<BillItems key={props.bill.id} item={props.bill} type="bill"/> flatMap() 

// <BillItems key={props.apps.id} item={props.apps} type="app"/>