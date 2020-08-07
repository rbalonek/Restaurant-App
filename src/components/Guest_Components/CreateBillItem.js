import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./CreateBillItem.css";

//Icons
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

function CreateBillItem(props) {
  const { id, type } = useParams();
  const name = `${id}`;
  const price = `${type}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill",
      {
        fields: {
          name: name,
          price: price,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.invokeFetch(!props.fetchEntries);
    ActionLink();
  };
  function ActionLink() {
    window.location.assign("/LiveMenu");
    alert(`${name} added to your bill!`)
  }

  return (
    <div>
      <Link to="/BillPage" className="bill-page">
        <ShoppingCartRoundedIcon />
      </Link>

      <Link to="/LiveMenu" className="menu-icon">
        <HomeRoundedIcon />
      </Link>

      <h1>
        {id} ${type}
      </h1>
      <form className="create-bill-form" onSubmit={handleSubmit}>
        <h2>Confirm Order</h2>
        <label htmlFor="name"></label>
        <input
          className="to-hide"
          type="Text"
          id="name"
          value={name}
        />{" "}
        <br /> <br />
        <label htmlFor="price"></label>
        <input
          className="to-hide"
          type="Text"
          id="price"
          value={price}
        />{" "}
        <br /> <br />
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
}

export default CreateBillItem;
