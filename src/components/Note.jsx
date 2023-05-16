import React, { useRef, useState } from 'react'
import { MdDelete, MdSettingsRemote } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { BsPatchCheck, BsPatchCheckFill, BsFillSaveFill } from 'react-icons/bs'

function Note(props) {
    const [isCompleted, setIsCompleted] = useState(false)

    function todoCompleted() {
        setIsCompleted(!isCompleted)
    }

    function handleClick() {
        props.onDelete(props.id)
        setIsCompleted(false)
    }

    return (
        <div
            style={{
                opacity: isCompleted ? '0.6' : null,
            }}
            className="relative bg-white py-2.5 px-5 shadow-inner rounded-sm overflow-hidden mobile:px-7"
        >
            <h1
                style={{
                    textDecoration: isCompleted ? 'line-through' : 'none',
                }}
                key={props.id}
                name="title"
                className="text-1xl mb-2 bg-transparent overflow-hidden break-words break-all font-medium"
            >
                {props.title}
            </h1>
            <p
                style={{
                    textDecoration: isCompleted ? 'line-through' : 'none',
                }}
                key={props.id}
                name="content"
                className="text-1xl mb-0 break-words pb-1 resize-none outline-none border-none w-full bg-transparent"
            >
                {props.content}
            </p>
            <button onClick={todoCompleted}>
                {isCompleted ? (
                    <BsPatchCheckFill className="absolute top-2 right-1 text-base cursor-pointer text-header-color mobile:right-2" />
                ) : (
                    <BsPatchCheck className="absolute top-2 right-1 text-base cursor-pointer mobile:right-2" />
                )}
            </button>
            <div className="flex justify-end items-center gap-2">
                <button>
                    <AiFillEdit className="text-xl" />
                </button>
                <button
                    className=" bottom-1 text-sm text-red-500"
                    onClick={handleClick}
                >
                    <MdDelete className="text-xl" />
                </button>
            </div>
        </div>
    )
}

export default Note
