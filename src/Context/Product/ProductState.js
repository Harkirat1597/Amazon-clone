import React, { useState } from 'react';
import ProductContext from './ProductContext';
import initialStateProductProductShowcase from '../../Data/initialStateProductProductShowcase.json';

const ProductState = (props) => {

    const [showcaseProduct, setShowcaseProduct] = useState(initialStateProductProductShowcase[0]);

    const updateShowcaseProduct = (product) => {
        const prodObj = {...product};
        setShowcaseProduct(prodObj);
    }

    return (
        <ProductContext.Provider value={{showcaseProduct, updateShowcaseProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;