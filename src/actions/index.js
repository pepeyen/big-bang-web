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