export const filterByType = (type,iteratable) => {
    let filteredType = [];

    iteratable.forEach(element => {
        if(element.type === type){
            filteredType.push(element);
        }
    });
    return filteredType;
};
export const filterByID = (ID,iteratable) => {
    let filteredID = -1;

    iteratable.forEach(element => {
        if(element.ID === parseInt(ID)){
            filteredID = element;
        }
    });

    return filteredID;
};