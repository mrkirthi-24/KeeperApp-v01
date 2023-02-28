import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";

function AddNotes(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function Expanded() {
    setExpand(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(input);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={input.title}
            autoFocus={true}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          onChange={handleChange}
          onClick={Expanded}
          value={input.content}
        />
        <Zoom in={expand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNotes;
