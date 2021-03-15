const filterInArray = (toBeChecked,toBeFiltered) => {
    let filteredArray = [];

    toBeChecked.forEach(element => {
        if(element !== toBeFiltered){
            filteredArray.push(element);
        };
    });

    return filteredArray;
};

export default filterInArray;