import React from "react";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
      </div>
    </div>
  );
};

export default Note;
