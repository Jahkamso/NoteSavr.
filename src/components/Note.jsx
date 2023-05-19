import React, { useEffect, useRef, useState } from 'react'
import { MdDelete, MdSettingsRemote } from 'react-icons/md'
import { AiOutlineEdit, AiFillEdit } from 'react-icons/ai'
import {
    BsBookmarkCheck,
    BsBookmarkCheckFill,
} from 'react-icons/bs'

function Note(props) {
    // Array of months
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    // Get the current date
    let currentDate = new Date()

    let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`

    // Get the current month index (0-11)
    let currentMonthIndex = currentDate.getMonth()
    let currentDay = currentDate.getDay()
    let currentYear = currentDate.getFullYear()

    // Get the current month name
    let timeStamp = `${currentTime}, ${months[currentMonthIndex]} ${currentDay}, ${currentYear}`

    const [note, setNote] = useState({
        title: '',
        content: '',
        timeStamp: '',
    })

    const [isCompleted, setIsCompleted] = useState(false)
    const [editNoteId, setEditNoteId] = useState(false)
    const [editTitle, setEditTitle] = useState(props.title)
    const [editContent, setEditContent] = useState(props.content)

    function todoCompleted() {
        setIsCompleted(!isCompleted)
    }

    function handleClick() {
        props.onDelete(props.id)
        setIsCompleted(false)
    }

    function handleEdit(event) {
        setEditTitle(event.target.value)
    }

    function handleContent(event) {
        setEditContent(event.target.value)
    }

    function editNote(id) {
        if (editNoteId) {
            let notesFromLocalStorage = JSON.parse(
                localStorage.getItem('notes') || '[]'
            )

            notesFromLocalStorage = notesFromLocalStorage.map((note, index) => {
                if (index === props.id) {
                    return {
                        title: editTitle,
                        content: editContent,
                        timeStamp: timeStamp
                    }
                }
                return note
            })
            localStorage.setItem('notes', JSON.stringify(notesFromLocalStorage))
            console.log(notesFromLocalStorage)
        }

        !editNoteId ? setEditNoteId(true) : setEditNoteId(false)
    }

    return (
        <div
            style={{
                opacity: isCompleted ? '0.6' : null,
                backgroundColor: props.toggleMode ? '' : '#212A3E',
                color: props.toggleMode ? '' : 'whitesmoke',
            }}
            className="relative pt-5 bg-white pb-2.5 px-5 shadow-inner rounded-sm overflow-hidden mobile:px-7"
        >
            {editNoteId ? (
                <input
                    style={{
                        backgroundColor: props.toggleMode ? '' : '#212A3E',
                        color: props.toggleMode ? '' : '#ECE8DD',
                    }}
                    onChange={handleEdit}
                    value={editTitle}
                    className="border-none outline-none font-medium"
                ></input>
            ) : (
                <h1
                    style={{
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        display: editNoteId ? 'none' : 'flex',
                        color: props.toggleMode ? '' : '#ECE8DD',
                    }}
                    name="title"
                    className="text-1xl mb-2 bg-transparent overflow-hidden break-words break-all font-medium"
                >
                    {editTitle}
                </h1>
            )}

            {editNoteId ? (
                <textarea
                    style={{
                        backgroundColor: props.toggleMode ? '' : '#212A3E',
                        color: props.toggleMode ? '#ECE8DD' : '',
                    }}
                    onChange={handleContent}
                    value={editContent}
                    className="border-none outline-none resize-none font-medium"
                ></textarea>
            ) : (
                <p
                    style={{
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        display: editNoteId ? 'none' : 'flex',
                    }}
                    name="content"
                    className="text-1xl mb-0 break-words break-all pb-1 resize-none outline-none border-none w-full bg-transparent"
                >
                    {editContent}
                </p>
            )}

            <button onClick={todoCompleted}>
                {isCompleted ? (
                    <BsBookmarkCheckFill className="absolute top-3 right-1 text-base cursor-pointer text-header-color mobile:right-2" />
                ) : (
                    <BsBookmarkCheck className="absolute top-3 right-1 text-base cursor-pointer mobile:right-2" />
                )}
            </button>
            <div className="flex justify-between items-center gap-2">
                <p
                    style={{ color: props.toggleMode ? '' : '#474E68' }}
                    className="text-xs"
                >
                    {props.timeStamp}
                </p>
                <div className="flex gap-3">
                    <button onClick={editNote}>
                        <AiOutlineEdit className="text-lg" />
                    </button>
                    <button
                        className=" bottom-1 text-sm text-red-500"
                        onClick={handleClick}
                    >
                        <MdDelete className="text-lg text-delete-color" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Note
