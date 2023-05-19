import React, { useState } from "react";
// import { GrDocumentNotes } from 'react-icons/gr';
import { FaAffiliatetheme } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

function Heading(props) {

    const logout = () => {
        localStorage.removeItem('email')
        window.location.reload()
    }

    return (
        <header
            style={{
                backgroundColor: props.toggleMode ? '' : '#0A4D68',
            }}
            className="flex justify-between items-center bg-header-color m-auto py-4 px-10 overflow-hidden sticky top-0 z-20"
        >
            <h1 className="flex items-center gap-2 text-4xl font-200 text-white py-3 font-McLaren">
                <FaAffiliatetheme className="text-white" />
                NoteSavr.
            </h1>
            <div className="flex justify-center items-center gap-5">
                {props.toggleMode ? (
                    <BsFillSunFill
                        onClick={props.toggleModes}
                        className="text-white text-lg cursor-pointer"
                    />
                ) : (
                    <BsFillMoonStarsFill
                        className="text-white text-lg cursor-pointer"
                        onClick={props.toggleModes}
                    />
                )}
                <button
                    onClick={logout}
                    className="flex items-center gap-2 text-white"
                >
                    <AiOutlineLogout className="f font-bold" />
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Heading