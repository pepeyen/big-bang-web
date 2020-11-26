import React from 'react';
import {useSelector} from 'react-redux';

//Components
import {
    Post,
    Page
} from '../components';

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems);
    
    if(cartItems.length === 0 || !cartItems.length){
        return(
            <Page pageTitle="Cart">
                <Post>
                   <span>No products found</span>
                </Post>
            </Page>
        );
    }else{
        return(
            <Page pageTitle="Cart">
                <Post>
                    {
                        cartItems.map((element, index) => {
                            return(
                                <p key={index}>{element.productID}</p>
                            );
                        })
                    }
                </Post>
            </Page>
        );
    }
};

export default Cart;