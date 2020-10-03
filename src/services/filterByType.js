export default function filterByType(type,iteratable){
    let filteredType = [];
    
    iteratable.forEach((element,index) => {
        if(element.type === type){
            filteredType.push({ID: index});
        }
    });

    return filteredType;
}