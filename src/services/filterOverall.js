/**
 * Returns a element who matches the filtering.
 * 
 * @param {any} ID Target filtering.
 * @param {any} type Target array.
 * @param {any[]} iteratable Target array.
 * @returns {any} Array of filtered elements.
 */
const filterOverall = (ID,type,iteratable) => {
    let filtered = -1;

    iteratable.forEach(element => {
        if(element.ID === parseInt(ID) && element.type === type){
            filtered = element;
        };
    });

    return filtered;
};

export default filterOverall;