import React, { useRef, useState } from 'react'
import { MdDelete, MdSettingsRemote } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { BsPatchCheck, BsPatchCheckFill, BsFillSaveFill } from 'react-icons/bs'


function Note(props) {



  const [isCompleted, setIsCompleted] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

    function todoCompleted() {
        setIsCompleted(!isCompleted)
    }

    function handleClick() {
        props.onDelete(props.id)
        setIsCompleted(false)
    }
  
  function editFunc() {
      setIsEditing(!isEditing)
  }
    
  function handleChange(event) {
      const { name, value } = event.target
      const editId = props.id
      const editNote = props.editNote
      editNote[editId] = {
          [name]: value,
      }

      props.setEditNote(() => {
          return [...editNote]
      })
  }
  
    return (
        <div
            style={{
                opacity: isCompleted ? '0.6' : null,
            }}
            className="relative bg-white py-2.5 px-4 shadow-inner rounded-sm overflow-hidden"
        >
            <input
                key={props.id}
                name="title"
                value={props.editNote[props.id].title}
                onChange={handleChange}
                className="text-1xl font-bold mb-1.5 outline-none border-none bg-transparent overflow-hidden w-full"
                disabled={!isEditing}
            ></input>
            <textarea
                name="content"
                value={props.editNote[props.id].content}
                onChange={handleChange}
                className="text-1xl mb-2.5 whitespace-pre-wrap break-words pb-3 resize-none outline-none border-none w-full bg-transparent"
                disabled={!isEditing}
            ></textarea>
            <button onClick={todoCompleted}>
                {isCompleted ? (
                    <BsPatchCheckFill className="absolute top-2 right-3 text-base cursor-pointer text-header-color" />
                ) : (
                    <BsPatchCheck className="absolute top-2 right-3 text-base cursor-pointer" />
                )}
            </button>
            <div className="flex justify-end gap-2">
                <button>
                    <AiFillEdit onClick={editFunc} className="text-xl" />
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
