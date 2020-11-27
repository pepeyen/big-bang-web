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

export const insertToCart = (product) => {
    return {
        type: 'INSERT_TO_CART',
        product
    };
};

export const removeFromCart = (product, removalType) => {
    return {
        type: 'REMOVE_FROM_CART',
        removalType: removalType ?? 'remove-one',
        product
    };
}