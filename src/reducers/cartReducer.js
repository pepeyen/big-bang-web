//Services
import {deleteFromObject} from '../services';

let nextState = {};

const cartReducer = (state = JSON.parse(window.sessionStorage.getItem("cartItems")) === null ? {} : 
                        JSON.parse(window.sessionStorage.getItem("cartItems")), action) => {

    switch(action.type){
        case 'INSERT_TO_CART':
            let productCount = state[action.product.productId] ? state[action.product.productId].productCartCount : 1;

            if(state[action.product.productId]){
                productCount ++;
            }

            nextState = {
                ...state,
                [action.product.productId]: {
                    product: action.product,
                    productCartCount: productCount
                }
            };

            window.sessionStorage.setItem("cartItems", JSON.stringify(nextState));

            return state = nextState;

        case 'REMOVE_FROM_CART':
            if(action.removalType === 'remove-one' && state[action.product.productId].productCartCount >= 2){
                nextState = {
                    ...state,
                    [action.product.productId]: {
                        product: action.product,
                        productCartCount: state[action.product.productId].productCartCount - 1
                    }
                };
            }else{
                nextState = Object.keys(state).length === 0 && state.constructor === Object ? {} : deleteFromObject(action.product.productId, state);
            }

            window.sessionStorage.setItem("cartItems", JSON.stringify(nextState));

            return state = nextState;

        default:
            return state;
    };
};

export default cartReducer;