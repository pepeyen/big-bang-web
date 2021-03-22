/**
 * Returns a array containing all filtered types.
 * 
 * @param {any} type Target filtering.
 * @param {any[]} iteratable Target array.
 * @returns {any[]} Array of filtered elements.
 */
const filterByType = (type,iteratable) => {
    const filteredType = [];

    iteratable.forEach(element => {
        if(element.type === type){
            filteredType.push(element);
        };
    });
    return filteredType;
};

export default filterByType;