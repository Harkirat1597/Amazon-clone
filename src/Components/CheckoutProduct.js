import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../Context/Product/ProductContext';
import MainContext from '../Context/Main/MainContext';

const CheckoutProduct = ({ product }) => {
    const {id, title, image, price, rating} = product;

    const prodContext = useContext(ProductContext);
    const { updateShowcaseProduct } = prodContext;

    const mainContext = useContext(MainContext);
    const { removeFromBasket, addToWishlist, findProductWishlist, removeFromWishlist } = mainContext;


    const [flagAddToWishlist, setFlagAddToWishlist] = useState(false);

    useEffect(() => {
        setInitialSettigs();
    }, []);

    const setInitialSettigs = () => {
        setFlagAddToWishlist(() => findProductWishlist(product));
    }

    const handleRemoveItem = () => { 
        removeFromBasket(product);
    }

    const handleAddToWishlist = () => {
        addToWishlist(product);
        removeFromBasket(product);
    }

    const handleRemoveFromWishlist = () => {
        removeFromWishlist(product);
    }

    return (
            <div className='checkout-prod' onClick={() => updateShowcaseProduct(product)}>
                
                <Link to='/showcase' style={{color: "black", textDecoration: "none"}}>
                    <img className="mr-2" src={image} alt="" />
                </Link>
                <div className="checkout-prod-info mr-2">
                    <Link to='/showcase' style={{color: "black", textDecoration: "none"}}>
                        <p className="checkout-prod-title">{title}</p>
                    </Link>
                    <p style={{color: "darkgreen", fontSize: "12px"}}>In stock</p>
                    <p style={{fontSize: "12px"}}>Product is eligile for FREE delivery</p>
                    <div className="checkout-prod-rating ">
                        {
                            Array(Math.round(rating.rate)).fill().map((_) => (
                            <p> <i className="fa-solid fa-star"></i> </p>
                            ))
                        }
                    </div>
                    <p className="checkout-prod-price ">
                        <small>&#8377;</small>
                        <strong> {price}</strong>
                    </p>
                    <div className='checkout-prod-btn-group mc-1'>
                        <button onClick={handleRemoveItem} style={{borderRight: "0.5px solid blue"}}>Remove Item</button>
                        
                        {!flagAddToWishlist ?
                            <button onClick={handleAddToWishlist}>Save for later</button>
                            :
                            <button onClick={handleRemoveFromWishlist}>Remove from wishlist</button>
                        }
                    </div>
                </div>
            </div>
    );
}

export default CheckoutProduct;