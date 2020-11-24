import {combineReducers} from 'redux';

//Reducers
import likeButtonReducer from './likeButtonReducer';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
    likedItems: likeButtonReducer,
    cartItems: cartReducer
});

export default allReducers;