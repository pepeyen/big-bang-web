export const likeAItem = (item) => {
    return {
        type: 'LIKE_A_ITEM',
        item
    };
};

export const deslikeAItem = (item) => {
    return {
        type: 'DESLIKE_A_ITEM',
        item
    };
};