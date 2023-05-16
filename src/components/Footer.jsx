import React from "react";


const currentYear = new Date().getFullYear();


function Footer() {
    return (
        <footer className="relative text-center">
            <p className="text-p-color bottom-0 w-full">
                Copyright © {currentYear}
            </p>
        </footer>
    )
}

export default Footer