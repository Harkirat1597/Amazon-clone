import React, { useState, useEffect } from 'react';
import MainContext from './MainContext';

const initialStateUser = {
    username: "", email: "", password: "" 
};

const MainState = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(initialStateUser);
    const [address, setAddress] = useState([]);
    const [basket, setBasket] = useState([]);
    const [basketTotal, setBasketTotal] = useState(0);
    const [wishlist, setWishlist] = useState([]);
    
    useEffect(() => {
        console.log(wishlist);
    }, [wishlist])
    
    const createUser = ({username, email, password}) => {
        setUser({...user, username, email, password});
        setIsLogin(true);
        return true;
    }

    const login = ({username, email, password}) => {
        
    }

    const logout = () => {
        setUser(initialStateUser);
        setIsLogin(false);
        return true;
    }

    const updateUserPassword = (updatedPass) => {
        const newUser = {...user, password: updatedPass};
        setUser(newUser);
        console.log(user);
    }

    const addNewAddress = (addressObj) => {
        const newAddress = [...address, addressObj];
        setAddress(newAddress);
    }

    const removeAddress = (id) => {
        const newAddress = address.filter((ads) => ads.id !== id);
        setAddress(newAddress);
    }

    const addToWishlist = (product) => {
        const newWishlist = [...wishlist, product];
        setWishlist(newWishlist);
    }

    const removeFromWishlist = (product) => {
        const newWishlist = wishlist.filter((prod) => prod.id !== product.id);
        setWishlist(newWishlist);
    }

    const findProductWishlist = (product) => {
        if (!wishlist || wishlist.length <= 0) return false;

        const res = wishlist.find((prod) => prod.id === product.id);
        
        return res ? true : false;
    }

    const addToBasket = (product) => {
        let newBasket = [...basket, product];

        setBasketTotal(basketTotal + product.price);

        setBasket(newBasket);
    }

    const removeFromBasket = (product) => {
        if (basket.length <= 0) return;

        let newBasket = [...basket];
        
        const index = basket.findIndex((prod) => prod.id === product.id);

        if (index < 0 || index > basket.length) return;

        for (let prod of newBasket) {
            if (prod.id === product.id) {
                setBasketTotal(basketTotal - product.price);
                break;
            }
        }

        newBasket.splice(index, 1);

        setBasket(newBasket);
    }

    const findProduct = (product) => {
        if (basket.length === 0 || !product) return false;

        const res = basket.find((prod) => prod.id === product.id);

        return res ? true : false;
    }

    return (
        <MainContext.Provider value={{user, basket, basketTotal, addToBasket, removeFromBasket, findProduct, createUser, login, logout, addNewAddress, removeAddress, addToWishlist, removeFromWishlist, updateUserPassword, isLogin, address, wishlist, findProductWishlist}}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState;