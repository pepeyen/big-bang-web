//import {findInArray,filterInArray} from '../services';

const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'INSERT_TO_CART':
            return state = [...state, action.product];

        case 'REMOVE_FROM_CART':
            return state = [...state, action.product];

        default:
            return state;
    };
};

export default cartReducer;