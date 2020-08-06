import React from "react";
import axios from "axios";

export default function DeleteAllButton(props) {
const {deletePost} = props
  
  
  return (
    <div>
      <button onClick={deletePost}>Pay Bill</button>
    </div>
  );
}



// function ActionLink() {
  //   window.location.assign("/LiveMenu");
  // }
