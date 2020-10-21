export const findInArray = (toBeChecked,toBeFound) => {
    let isFound = false;

    toBeChecked.forEach(element => {
        if(element === toBeFound){
            isFound = true;
        }
    });

    return isFound;
};
export const filterInArray = (toBeChecked,toBeFiltered) => {
    let filteredArray = [];

    toBeChecked.forEach(element => {
        if(element !== toBeFiltered){
            filteredArray.push(element);
        }
    });

    return filteredArray;
};