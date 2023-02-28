import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";
import AddNotes from "./AddNotes";

function createNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

const App = () => {
  return (
    <div>
      <Header />
      <AddNotes />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
};

export default App;
