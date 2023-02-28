import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default Note;
