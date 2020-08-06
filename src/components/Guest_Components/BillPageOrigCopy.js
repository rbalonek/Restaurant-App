// import React from "react";
// import BillItems from "./BillItems"
// import DeleteAllButton from "../Editor_Components/DeleteAllButton"
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import { Link } from 'react-router-dom'

// export default function BillPage(props) {

//   const total = props.customerBill.reduce((sum,curr) => sum+parseFloat(curr.fields.price),0)
//   return (
//     <div>
//     <Link to="/LiveMenu">
//       <HomeRoundedIcon />
//       </Link>

//       <h1>Bill</h1>
//       {props.customerBill.map((app) => <BillItems key={app.id} item={app} type="app" />)}
//       <h1>Total</h1>
//       <p>{total}</p>
//       <DeleteAllButton />
//     </div>
//   );
// }
