/**
 * Returns if the a given value is found in the array.
 * 
 * @param {any[]} toBeChecked Target array.
 * @param {any} toBeFound Target value.
 * @returns {Boolean} Search status.
 */
const findInArray = (toBeChecked,toBeFound) => {
    let isFound = false;

    toBeChecked.forEach(element => {
        if(element === toBeFound){
            isFound = true;
        };
    });

    return isFound;
};

export default findInArray;