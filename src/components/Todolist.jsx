import React, { useState } from "react";

function List(props) {
  return (
    <div
      onClick={() => {
        props.handet(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}
export default List;
// notes

// so we need to pass over what defines this List component
// such as id .... since it is an array
