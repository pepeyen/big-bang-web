import likeButtonReducer from './likeButtonReducer';
import storeAccessToken from './storeAccessToken';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    likedItems: likeButtonReducer,
    accessToken: storeAccessToken 
});

export default allReducers;