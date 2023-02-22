import React, { useContext, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct.js';
import EmptyCart from './EmptyCart.js';
import MainContext from '../Context/Main/MainContext';

const Checkout = ()  => {
  const mainContext = useContext(MainContext);
  const {basket, basketTotal} = mainContext;

  useEffect(() => {
    scrollToTop();
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <div className='checkout-container main-container'>
      
      <div className="checkout-cart-container mr-2 mc-2">
        <div className="checkout-cart-header mc-2" 
          style={{borderBottom: "0.5px solid lightgrey"}}
        >
          {basket.length === 0 ? 
            <h2 className="checkout-cart-heading" style={{fontWeight: "400"}} >Shopping cart is empty</h2> : 
            <h2 className="checkout-cart-heading" style={{fontWeight: "400"}} >Shopping cart</h2>
          }

          {basket.length !== 0 && <p>Price</p> }
        </div>
        
        <div className='checkout-cart mc-2' style={{display: "flex", flexDirection: "column"}} >
          {
            basket.length === 0 && <EmptyCart />
          }
          {basket.map((product) => {
            return <CheckoutProduct 
              key={product.id}
              product={product}
            />
          })}
        </div>

        {basket.length !== 0 &&
          <div className='checkout-cart-footer mc-2' 
            style={{borderTop: "0.5px solid lightgrey"}}
          >
            <p>
              Subtotal &#40;
              <span> {basket.length} item </span>
              &#41; : &#x20B9;
              <span style={{fontWeight: "bolder", fontSize: "1.5em"}}> {basketTotal.toFixed(2)}</span>
              .00
            </p>
          </div>
        }

      </div>

      <div className="cart-total-container mr-2 mc-2" style={{opacity: `${basket.length === 0 ? 0 : 1}`}} >
        <div className="cart-total-header">
          <div 
            className="mc-2"
            style={{backgroundColor: "RGB(3, 143, 80)", borderRadius: "100px", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", marginRight: "10px"}}
          >
            <i className="fa-solid fa-check" style={{color: "white"}}></i>
          </div>
          <p style={{color: "RGB(3, 143, 80)"}}>
            Your order is eligible for free delivery
          </p>
        </div>

        <div className='checkout-cart-footer mc-2'>
            <p>
              Subtotal &#40;
              <span> {basket.length} item </span>
              &#41; : &#x20B9;
              <span style={{fontWeight: "bolder", fontSize: "1.5em"}}> {basketTotal.toFixed(2)} </span>
              .00
            </p>
        </div>
        <button className="mc-2">Proceed to Buy</button>
      </div>
      
    </div>
  )
}

export default Checkout