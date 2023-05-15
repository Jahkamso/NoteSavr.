import React, { useState } from 'react'
import { BiAddToQueue } from 'react-icons/bi'

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    })

    function handleChange(event) {
        const { name, value } = event.target

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            }
        })
    }

    function submitNote(event) {
        event.preventDefault()

        note.title && note.content !== ''
            ? props.onAdd(note)
            : alert('Enter todo!')

        setNote({
            title: '',
            content: ''
        })
    }

    return (
        <div>
            <form className="relative shadow-lg tablet:max-w-lg mt-8 mr-auto mb-5 ml-auto bg-white p-4 rounded-md mobile:max-w-md">
                <input
                    className="w-full border-none p-1 outline-none text-lg resize-none"
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    className="w-full border-none p-1 outline-none text-lg resize-none"
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button
                    className="flex items-center justify-center absolute right-5 -bottom-4 bg-white border-none rounded-full w-9 h-9 cursor-pointer outline-none"
                    onClick={submitNote}
                >
                    <BiAddToQueue className="text-2xl text-header-color" />
                </button>
            </form>
        </div>
    )
}

export default CreateArea