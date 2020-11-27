//Services
import {deleteFromObject} from '../services';

let nextState = {};

const cartReducer = (state = JSON.parse(window.sessionStorage.getItem("cartItems")) === null ? {} : 
                        JSON.parse(window.sessionStorage.getItem("cartItems")), action) => {

    switch(action.type){
        case 'INSERT_TO_CART':
            let productCount = state[action.product.product_id] ? state[action.product.product_id].productCartCount : 1;

            if(state[action.product.product_id]){
                productCount ++;
            }

            nextState = {
                ...state,
                [action.product.product_id]: {
                    product: action.product,
                    productCartCount: productCount
                }
            };

            window.sessionStorage.setItem("cartItems", JSON.stringify(nextState));

            return state = nextState;

        case 'REMOVE_FROM_CART':
            if(action.removalType === 'remove-one' && state[action.product.product_id].productCartCount >= 2){
                nextState = {
                    ...state,
                    [action.product.product_id]: {
                        product: action.product,
                        productCartCount: state[action.product.product_id].productCartCount - 1
                    }
                };
            }else{
                nextState = Object.keys(state).length === 0 && state.constructor === Object ? {} : deleteFromObject(action.product.product_id, state);
            }

            window.sessionStorage.setItem("cartItems", JSON.stringify(nextState));

            return state = nextState;

        default:
            return state;
    };
};

export default cartReducer;