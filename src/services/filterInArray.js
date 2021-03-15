/**
 * Returns a array containing all elements who doesn't match the filtering.
 * 
 * @param {any} toBeChecked Target filtering.
 * @param {any[]} toBeFiltered Target array.
 * @returns {any[]} Array of filtered elements.
 */
const filterInArray = (toBeChecked,toBeFiltered) => {
    const filteredArray = [];

    toBeChecked.forEach(element => {
        if(element !== toBeFiltered){
            filteredArray.push(element);
        };
    });

    return filteredArray;
};

export default filterInArray;