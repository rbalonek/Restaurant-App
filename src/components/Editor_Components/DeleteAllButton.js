import React from "react";

export default function DeleteAllButton(props) {
  const { deletePost } = props;

  return (
    <div>
      <button onClick={deletePost}>Pay Bill</button>
    </div>
  );
}
