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

export const insertToCart = (productID) => {
    return {
        type: 'INSERT_TO_CART',
        product: {productID}
    };
};

export const removeFromCart = (productID) => {
    return {
        type: 'REMOVE_FROM_CART',
        product: {productID}
    };
}