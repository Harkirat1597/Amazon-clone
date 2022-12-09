import React, {useContext, useEffect} from "react";
import './Showcase.css';
import ProductContext from "../Context/Product/ProductContext";
import ProductShowcase from "./ProductShowcase";

const Showcase = () => {
    const prodContext = useContext(ProductContext);
    const {showcaseProduct} = prodContext;

    useEffect(() =>{
        scrollToTop();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0
        });
    };

    return (
        <div className='showcase-container main-container'>

            <ProductShowcase 
                product={showcaseProduct}
            />

        </div>
    );
}

export default Showcase;
