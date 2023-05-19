import React from "react";


const currentYear = new Date().getFullYear();


function Footer(props) {
    return (
        <footer className="inherit bottom-0 w-full text-center">
            <p
                style={{ color: props.toggleMode ? '' : '#394867' }}
                className="text-p-color mt-6 mb-2"
            >
                Copyright © {currentYear}
            </p>
        </footer>
    )
}

export default Footer