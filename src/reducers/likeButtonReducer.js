import {findInArray,filterInArray} from '../services';

let nextState = {};

const likeButtonReducer = (state = JSON.parse(window.sessionStorage.getItem("likedItems")) === null ? {} : 
                            JSON.parse(window.sessionStorage.getItem("likedItems")), action) => { 
    switch(action.type){
        case 'LIKE_A_ITEM':{
            let likedList = state[action.item.itemType + 's'] ? state[action.item.itemType + 's'].likedItemsList : [];

            if(findInArray(likedList,action.item.itemID) === false){
                likedList.push(action.item.itemID);
            }
            nextState = {
                ...state,
                [action.item.itemType + 's']: {
                    likedItemsList: likedList,
                    likedItemsType: action.item.itemType
                }
            };

            window.sessionStorage.setItem("likedItems", JSON.stringify(nextState));
            return state = nextState;
        }

        case 'DESLIKE_A_ITEM':
            nextState = {
                ...state,
                [action.item.itemType + 's']: {
                    likedItemsList: filterInArray(state[action.item.itemType + 's'] ? state[action.item.itemType + 's'].likedItemsList : [],action.item.itemID),
                    likedItemsType: action.item.itemType
                }
            };
            
            window.sessionStorage.setItem("likedItems", JSON.stringify(nextState));
            return state = nextState;
 
        default:
            return state;
    }
};

export default likeButtonReducer;