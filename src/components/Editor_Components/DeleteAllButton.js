import React from "react";
import ButtonCloseBill from "../Guest_Components/ButtonCloseBill"

export default function DeleteAllButton(props) {
  const { deletePost } = props;
  
  
  return (
    <div onClick={deletePost}>
    <ButtonCloseBill />
    </div>
  );
}
// <button onClick={deletePost}>Pay Bill</button>