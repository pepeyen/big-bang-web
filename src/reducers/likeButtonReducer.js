import {findInArray,filterInArray} from '../services/findInArray';

const likeButtonReducer = (state = JSON.parse(window.sessionStorage.getItem("likedItems")) === null ? [] : JSON.parse(window.sessionStorage.getItem("likedItems")), action) => { 
    switch(action.type){
        case 'LIKE_A_ITEM':
            let likedList = state;

            if(findInArray(state,action.item) === false){
                likedList.push(action.item);
            }
            return state = likedList;

        case 'DESLIKE_A_ITEM':
            return state = filterInArray(state,action.item);
        
        default:
            return state;
    }
};

export default likeButtonReducer;