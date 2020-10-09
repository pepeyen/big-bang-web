export const filterByType = (type,iteratable) => {
    let filteredType = [];
    
    iteratable.forEach((element,index) => {
        if(element.type === type){
            filteredType.push({ID: index});
        }
    });

    return filteredType;
}
export const filterByID = (ID,iteratable) => {
    let filteredID = -1;

    iteratable.forEach((element,index) => {
        if(element.ID === parseInt(ID)){
            filteredID = index;
        }
    });

    return filteredID;
}