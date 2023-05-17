import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import App from "./App";

function SignIn() {
    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    
    return (
        <div>
            {value ? (
                <App />
            ) : (
                <div className="flex justify-center items-center mt-80">
                    <button
                        className="b bg-header-color px-5 py-3 text-center text-white text-lg rounded-md"
                        onClick={handleClick}
                    >
                        Google Sign-In
                    </button>
                </div>
            )}
        </div>
    )
}

export default SignIn;