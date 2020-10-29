export const likeAItem = (itemID,itemType) => {
    return {
        type: 'LIKE_A_ITEM',
        item: {
            itemID,
            itemType
        }
    };
};

export const deslikeAItem = (itemID,itemType) => {
    return {
        type: 'DESLIKE_A_ITEM',
        item: {
            itemID,
            itemType
        }
    };
};

export const storeAccessToken = (accessToken) => {
    return {
        type: 'STORE_ACCESS_TOKEN',
        accessToken
    };
};

export const removeAccessToken = (accessToken) => {
    return {
        type: 'REMOVE_ACCESS_TOKEN'
    };
};