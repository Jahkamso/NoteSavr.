import React from "react";


const currentYear = new Date().getFullYear();


function Footer() {
    return (
      <footer className="absolute text-center bottom-0 w-full h-10">
        <p className="text-p-color">Copyright © {currentYear}</p>
      </footer>
    );
}

export default Footer