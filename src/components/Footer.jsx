import React from "react";


const currentYear = new Date().getFullYear();


function Footer() {
    return (
        <footer className="inherit bottom-0 w-full text-center">
            <p className="text-p-color mt-6 mb-2">Copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer