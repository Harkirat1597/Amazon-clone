import React, { useRef, useContext } from 'react';
import MainContext from '../Context/Main/MainContext.js';

const AddAddress = ({ handleChange }) => {
    const context = useContext(MainContext);
    const { address, addNewAddress } = context;

    const houseNo = useRef();
    const street = useRef();
    const locality = useRef();
    const city =  useRef();
    const pin = useRef();
    const state = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const addressObj = {
            id: address.length+1,
            houseno: houseNo.current.value, 
            street: street.current.value, 
            locality: locality.current.value, 
            city: city.current.value, 
            pin: pin.current.value,
            state: state.current.value
        }
        addNewAddress(addressObj);
        console.log(address);
        handleChange(); 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input className="mc-2" ref={houseNo} type="text" placeholder="House no." required />
                <input className="mc-2" ref={street} type="text" placeholder="Street" required />
                <input className="mc-2" ref={locality} type="text" placeholder="Locality" required />
                <input className="mc-2" ref={city} type="text" placeholder="City" required />
                <input className="mc-2" ref={pin} type="text" placeholder="Pin" required />
                <input className="mc-2" ref={state} type="text" placeholder="State" required />
                <button className='mc-2' type="submit">Add new address</button>
            </form>

        </div>
    )
}

export default AddAddress;