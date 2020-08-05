import React from "react";
import BillItems from "../../live_menu/Guest_Components/BillItems"
import MenuItem from "../../components/MenuItem"

export default function BillPage(props) {

  // console.log(props)
  return (
    <div>
      <h1>Bill</h1>
      {props.customerBill.map((app) => <BillItems key={app.id} item={app} type="app" />)}
    
    </div>
  );
}

//<BillItems key={props.bill.id} item={props.bill} type="bill"/>

// <BillItems key={props.apps.id} item={props.apps} type="app"/>