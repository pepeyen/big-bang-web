const filterByType = (type,iteratable) => {
    let filteredType = [];

    iteratable.forEach(element => {
        if(element.type === type){
            filteredType.push(element);
        };
    });
    return filteredType;
};

export default filterByType;