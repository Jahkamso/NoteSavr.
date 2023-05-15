import React, { useEffect, useState } from 'react';
import Heading from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';


function App() {

  const notesFromLocalStorage = JSON.parse(localStorage.getItem('notes') || '[]')

  const [notes, setNotes] = useState(notesFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  function addNote(newNote) {
      setNotes((prevNotes) => {
          return [...prevNotes, newNote]
      })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Heading />
      <CreateArea onAdd={addNote} />
      <section className='relative grid gap-8 place-content-center py-6 px-2.5 mb-4 tablet:grid-cols-notes-grid  laptop:mx-auto desktop:ml-auto mr-auto mobile:grid-cols-2 mx-2'>
        {notes.map((noteItem, index) => {
          return (
              <div>
                  <Note
                      key={index}
                      id={index}
                      title={noteItem.title}
                      content={noteItem.content}
                onDelete={deleteNote}
                editNote={notes}
                setEditNote={setNotes}
                  />
              </div>
          )
        })}
      </section>
      <Footer />
    </>
  );
}

export default App;
