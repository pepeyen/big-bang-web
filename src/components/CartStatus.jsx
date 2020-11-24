import React from 'react';
import {useSelector} from 'react-redux';

const CartStatus = () => {
    const cartItems = useSelector(state => state.cartItems);

    return(
        <span className="cart__status">{cartItems.length}</span>
    );
};

export default CartStatus;