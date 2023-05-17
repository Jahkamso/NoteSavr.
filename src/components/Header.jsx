import React from "react";
// import { GrDocumentNotes } from 'react-icons/gr';
import { FaAffiliatetheme } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

function Heading() {
    const logout = () => {
        localStorage.removeItem('email')
        window.location.reload()
    }

    return (
        <header className="flex justify-between items-center bg-header-color m-auto py-4 px-10">
            <h1 className="flex items-center gap-2 text-4xl font-200 text-white py-3 font-McLaren">
                <FaAffiliatetheme className="text-white" />
                NoteSavr.
            </h1>
            <button onClick={logout} className="flex items-center gap-2 text-white"><AiOutlineLogout/>Logout</button>
        </header>
    )
}

export default Heading