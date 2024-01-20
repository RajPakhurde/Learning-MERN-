import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function addNOte(note) {
    setNotes((preValue) => {
      return [...preValue, note];
    })
  }

  function deleteNote(id) {
    setNotes(preValue => {
      return preValue.filter((note, index) => {
          return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNOte}
      />
      {notes.map((note, index) => {
        return  <Note 
        key={index} 
        id={index}
        title={note.title} 
        content={note.content} 
        onDelete={deleteNote} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
