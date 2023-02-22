import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../Context/Product/ProductContext';
import MainContext from '../Context/Main/MainContext.js';

const Product = ({ product, type }) => {
    const {id, title, rating, price, image} = product;

    const [addedToCart, setAddedToCart] = useState(false);

    const prodContext = useContext(ProductContext);
    const { updateShowcaseProduct } = prodContext;

    const mainContext = useContext(MainContext);
    const { findProduct, removeFromWishlist, addToBasket, removeFromBasket } = mainContext;

    useEffect(() => {
        setInitials();
    }, []);

    const setInitials = () => {
        setAddedToCart(findProduct(product));
    }

    const handleRemoveWishlistAddCart = () => {
        addToBasket(product);
        removeFromWishlist(product);
    }

    const handleAddTocart = () => {
        addToBasket(product);
        setAddedToCart(true);
    }

    const handleRemoveFromCart = () => {
        removeFromBasket(product);
        setAddedToCart(false);
    }

    return (
        <>
            <div className="product" onClick={() => updateShowcaseProduct(product)} >
                <Link to='/showcase' style={{color: "black", textDecoration: "none"}}>
                    <img alt="" src={image} className='mc-2 product-img' />
                
                    <div className='product-info'>
                        <p>{title}</p>

                        {/* <p>{description}</p> */}
                        
                        <p className='product-price'>
                            <small>&#8377;</small>
                            <strong>{price}</strong>
                        </p>
                        
                        <div className="product-rating">
                            {
                                Array(Math.round(rating.rate)).fill().map((el) => (
                                    <p> <i className="fa-solid fa-star"></i> </p>
                                    ))
                                }
                        </div>
                    </div> 
                </Link>

                {type === "wishlist" ?
                    <div>
                        <button className='btn-remove-from-cart' onClick={handleRemoveWishlistAddCart}>Add to cart</button>
                    </div>    
                    :
                    <div>
                        {!addedToCart ?
                            <button className='btn-add-to-cart' onClick={handleAddTocart}>Add to cart</button> :
                            <button className='btn-remove-from-cart' onClick={handleRemoveFromCart}>Remove from cart</button>
                        }
                    </div>
                }

            </div>
        </>
    );
}

export default Product;