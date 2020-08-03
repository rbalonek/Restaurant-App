import React from "react";
import axios from "axios";


export default function DeleteButton(props) {
  console.log(props.id)
  console.log(props.type)
  // let 'drink' === 'drinks';
  const deletePost = async () => {
    const data = await axios.delete(
      `https://api.airtable.com/v0/app9S6k06MQoTSJbG/${props.type}/${props.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    // props.invokeFetch(!props.fetchEntries)
  };
  function ActionLink() {
    window.location.assign("/MainMenu");
  }

  return (
    <div>
      <button onClick={deletePost} onMouseUp={ActionLink} >
        delete
      </button>
    </div>
  );
}
