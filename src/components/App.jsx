import React, { useEffect, useState } from 'react'
import Heading from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'

function App(props) {
    const notesFromLocalStorage = JSON.parse(
        localStorage.getItem('notes') || '[]'
    )

    const [notes, setNotes] = useState(notesFromLocalStorage)

    localStorage.setItem('notes', JSON.stringify(notes))

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id
            })
        })
    }

    return (
        <>
            <Heading />
            <CreateArea onAdd={addNote} />
            <section className="relative grid gap-8 place-content-center py-6 px-2.5 mb-4 tablet:grid-cols-notes-grid  laptop:mx-auto desktop:ml-auto mr-auto mobile:grid-cols-1 mx-2">
                {notes.map((noteItem, index) => {
                    return (
                        <div key={noteItem.title + index}>
                            <Note
                                key={index}
                                id={index}
                                title={noteItem.title}
                                content={noteItem.content}
                                timeStamp={noteItem.timeStamp}
                                onDelete={deleteNote}
                                notes={notes}
                                setNotes={setNotes}
                            />
                        </div>
                    )
                })}
            </section>
            <Footer />
        </>
    )
}

export default App
