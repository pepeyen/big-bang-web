export const filterByType = (type,iteratable) => {
    let filteredType = [];

    iteratable.forEach(element => {
        if(element.type === type){
            filteredType.push(element);
        }
    });
    return filteredType;
};
export const filterOverall = (ID,type,iteratable) => {
    let filtered = -1;

    iteratable.forEach(element => {
        if(element.ID === parseInt(ID) && element.type === type){
            filtered = element;
        }
    });

    return filtered;
};