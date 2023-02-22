import React, { useState, useContext, useEffect } from 'react';
import MainContext from '../Context/Main/MainContext';

const ProductShowcase = ({ product }) => {
    const { id, title, rating, price, description, category, image } = product;

    const mainContext = useContext(MainContext);
    const { removeFromBasket, addToBasket, findProduct, findProductWishlist, addToWishlist, removeFromWishlist } = mainContext;

    const [flagAddToCart, setFlagAddToCart] = useState(false);
    const [flagAddToWishlist, setFlagAddToWishlist] = useState(false);

    useEffect(() => {
        setInitialEssentials();
    }, []);

    const setInitialEssentials = () => {
        setFlagAddToCart(() => findProduct(product));
        setFlagAddToWishlist(() => findProductWishlist(product));
    }

    const handleAddToBasket = () => {
        addToBasket(product);
        setFlagAddToCart(true);
    }

    const handleRemoveFromBasket = () => {
        removeFromBasket(product);
        setFlagAddToCart(false);
    }

    const handleAddToWishlist = () => {
        addToWishlist(product);
        setFlagAddToWishlist(true);
    }

    const handleRemoveFromWishlist = () => {
        removeFromWishlist(product);
        setFlagAddToWishlist(false);
    }

    return (
        <div className='prod-showcase-container'>
            <div className="prod-image-cont mr-3 mc-3">
                <img className='prod-image' alt="" src={image}/>
            </div>

            <div className="prod-info-cont mr-3 mc-3">
                <h2 className='prod-info-title mc-2'>{title}</h2>
                <div className='product-rating mc-2'>
                    {Array(Math.round(rating.rate)).fill().map((el) => (
                        <p> <i className="fa-solid fa-star"></i> </p>
                        )
                    )}
                </div>
                <p className='mc-2'>{description}</p>
                <p className='mc-2 product-price'>
                    <small>&#8377;</small>
                    <span style={{fontSize: "30px", fontWeight: "bolder"}}>{price}</span>
                </p>
                <div className='mc-2'>
                    {!flagAddToCart ?
                        <button onClick={handleAddToBasket} className='btn-add-to-cart'>Add to cart</button> 
                        :
                        <button onClick={handleRemoveFromBasket} className='btn-remove-from-cart' >Remove from cart</button>
                    }

                    {!flagAddToWishlist ?    
                        <button onClick={handleAddToWishlist} className="btn-save-for-later mr-3">Add to wishlist</button>
                        :
                        <button onClick={handleRemoveFromWishlist} className="btn-save-for-later mr-3">Remove from wishlist</button>
                    }      
                </div>
            </div>
        </div>
    );
}

export default ProductShowcase;