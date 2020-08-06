import React from "react";
import axios from "axios";

export default function DeleteAllButton(props) {

  const deletePost = async () => {
    await axios.delete(
      // "https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill?filterByFormula=NOT(%7Bprice%7D%3D0)",
      "https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill?filterByFormula=price!=0",
      // `https://api.airtable.com/v0/app9S6k06MQoTSJbG/${props.type}/${props.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.invokeFetch(!props.fetchEntries)
    // ActionLink();
  };
  // function ActionLink() {
  //   window.location.assign("/LiveMenu");
  // }

  return (
    <div>
      <button onClick={deletePost}>Pay Bill</button>
    </div>
  );
}

