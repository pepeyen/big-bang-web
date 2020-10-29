const storeAccessToken = (state = '', action) => {
    switch(action.type){
        case 'STORE_ACCESS_TOKEN':
            return state = action.accessToken;

        case 'REMOVE_ACCESS_TOKEN':
            return state = '';
            
        default:
            return state;
    }
};

export default storeAccessToken;