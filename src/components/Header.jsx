import React from "react";
// import { GrDocumentNotes } from 'react-icons/gr';
import { FaAffiliatetheme } from 'react-icons/fa'

function Heading() {
    return (
        <header className="bg-header-color m-auto py-4 px-10">
            <h1 className="flex items-center gap-2 text-4xl font-200 text-white py-3 font-McLaren">
                <FaAffiliatetheme className="text-white" />
                NoteSavr.
            </h1>
        </header>
    )
}

export default Heading