import React, { useContext, useEffect } from 'react';
import './Wishlist.css';
import MainContext from '../Context/Main/MainContext.js';
import Product from './Product.js';

const Wishlist = () => {
    const context = useContext(MainContext);
    const { wishlist } = context;

    useEffect(() => {
        console.log(wishlist);
    }, []);

    return (
        <>
            <div className='container-wishlist main-container'>
                <div className="home-product-container">
                    <h2 className='mc-3' style={{fontWeight: "200"}}>Your Wishlist {wishlist.length === 0 ? "is empty" : ""}</h2>
                </div>
                <div className='home-product-container'>
                    {wishlist.map((el) => {
                        return (
                            <Product product={el} type='wishlist'/>
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Wishlist;
