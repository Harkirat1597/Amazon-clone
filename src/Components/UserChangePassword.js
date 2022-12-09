import React, { useState, useRef, useContext } from 'react';
import './User.css'
import MainContext from '../Context/Main/MainContext.js';

const ChangePassword = ({ handleChange }) => {
    const context = useContext(MainContext);
    const { updateUserPassword, user } = context;

    const oldPassRef = useRef();
    const newPassRef = useRef();
    const confirmPassRef = useRef();

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (oldPassRef.current.value !== user.password) {
            setMessage("Enter correct password");
        }

        if (newPassRef.current.value !== confirmPassRef.current.value) {
            setMessage("Password and confirm password do not match");
        }

        updateUserPassword(newPassRef.current.value);

        setMessage("Password changed");

        handleChange();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input className="mc-2" ref={oldPassRef} type="text" placeholder="Old password" required />
                <input className="mc-2" ref={newPassRef} type="password" placeholder="New password" required />
                <input className="mc-2" ref={confirmPassRef} type="password" placeholder="Confirm Password" required />
                <p className="mc-2">{message}</p>
                <button className='mc-2' type="submit">Change password</button>
            </form>

        </div>
    )
}

export default ChangePassword;