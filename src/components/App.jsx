import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import AddNotes from "./AddNotes";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  return (
    <div>
      <Header />
      <AddNotes onAdd={createNote} />
      {notes.map((item, index) => (
        <Note key={index} title={item.title} content={item.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
