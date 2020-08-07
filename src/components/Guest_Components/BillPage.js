import React from "react";
import BillItems from "./BillItems";
import DeleteAllButton from "../Editor_Components/DeleteAllButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CreateBillItem.css"

//Paper 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      
    },
  },
}));

const BASE_URL = "https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill/";

export default function BillPage(props) {
  const classes = useStyles();
  ///Soleil Solomon to the rescue!

  const KillTheBill = () => {
    // get our bills
    const billEntries = props.customerBill;
    const post = setInterval(async () => {
      // grabbing our current id
      const bill = billEntries.pop();
      // assess how many are left for our console log
      // const remaining = billEntries.length; USE If console.logging
      // this guy stops the interval in case there are no more entries
      if (!bill) {
        clearInterval(post);
        return ActionLink();
      }
      const { id } = bill;
      // make an axios request to the delete endpoint for entry with id ${id}
      await axios.delete(`${BASE_URL}${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      // nice lil log
      // console.table(id);
      // console.log(`Above entry just deleted. ${remaining} entries left!`);
    }, 250);
  };

  function ActionLink() {
    window.location.assign("/BillPage");
    alert('Thanks for paying the bill!')
  }

  const total = props.customerBill.reduce(
    (sum, curr) => sum + parseFloat(curr.fields.price),
    0
  );
  return (
    <div>
      <Link to="/LiveMenu">
        <HomeRoundedIcon />
      </Link>

      <h1>Bill</h1>
      
      {props.customerBill.map((app) => (
        <BillItems key={app.id} item={app} type="app" />
      ))}
      <h1>Total</h1>
      <Paper elevation={3}>{total}</Paper>
      
      <DeleteAllButton deletePost={KillTheBill} />
    </div>
  );
  };