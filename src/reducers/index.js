import likeButtonReducer from './likeButtonReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    likedItems: likeButtonReducer
});

export default allReducers;