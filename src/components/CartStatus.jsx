import React from 'react';
import {useSelector} from 'react-redux';

const CartStatus = () => {
    const cartItems = useSelector(state => state.cartItems);
    let productCount = 0;

    for(let key of Object.keys(cartItems)){
        productCount += cartItems[key].productCartCount;
    };

    return(
        <span className="cart__status">{productCount}</span>
    );
};

export default CartStatus;