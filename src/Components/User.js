import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ChangePassword from './UserChangePassword';
import AddAddress from './UserAddAddress';
import MainContext from '../Context/Main/MainContext.js';

const User = () => {
    const context = useContext(MainContext);
    const {wishlist, address, user, isLogin, removeAddress, logout} = context;
    
    const navigate = useNavigate();
    
    const [flagForPass, setFlagPass] = useState(false);

    const [flagForAdd, setFlagAdd] = useState(false);

    useEffect(() => {
        scrollToTop();
        setInitialSettings();
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0
        });
    };

    const setInitialSettings = () => {
        if (!isLogin) navigate('/login');
        else return;
    }

    const handleChangePassFlag = () => {
        if (flagForPass === false) {
            setFlagPass(true)
            return;
        }
        setFlagPass(false);
    }

    const handleChangeAddFlag = () => {
        if (flagForAdd === false) {
            setFlagAdd(true);
            return;
        }
        setFlagAdd(false);
    }

    const handleDeleteAddress = (id) => {
        removeAddress(id);
    }

    const handleSignout = () => {
        const res = logout();

        if (!res) return;

        navigate('/signup');
    }

    return (
        <div className='user-container main-container'>
            <div>
                <div className='mc-3 user-icon-div'>
                    <i className="fa-solid fa-user"></i>
                </div>

                <div className='mc-3 user-general-details-div'>
                    <p className='mc-3'>User name <span>{user.username}</span> </p>
                    
                    <p className='mc-3'>Email <span>{user.email}</span></p>

                    {!flagForPass && <p className=''>Password <span>********</span> </p>}

                    {!flagForPass ?
                        <button className='btn-edit-pass mc-3' onClick={handleChangePassFlag} >Change password</button>
                        :
                        <ChangePassword handleChange={handleChangePassFlag} />
                    }

                    {address.map((el) => (
                        <div className='mc-2' style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "10px", color:"gray"}}>
                            
                            <p className='mr-2'>{el.houseno}, {el.street}, {el.locality}, {el.city}, {el.pin}, {el.state} </p>
                            
                            <i className="fa-solid fa-trash user-address-delete-logo" onClick={() => handleDeleteAddress(el.id)}></i>
                        
                        </div>
                    ))}

                    {!flagForAdd ? 
                        <button 
                            className='btn-edit-details mc-3' 
                            onClick={handleChangeAddFlag} 
                        >
                            Add new address
                        </button>
                        :
                        <AddAddress handleChange={handleChangeAddFlag} />
                    }

                    <button className='btn-edit-details mc-3'
                        onClick={handleSignout}
                    >
                        Sign out
                    </button>

                </div>

                <div className='mc-3 user-whishlist'>
                    <h2>Wishlist</h2>
                    
                    {!wishlist.length === 0 ?
                        <p className='mc-2'>Your wishlist is empty, start adding products to the wishlist</p>  
                        :
                        <Link to='/wishlist'>
                            <button className='mc-2 btn-to-wishlist'>Checkout wishlist</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default User;