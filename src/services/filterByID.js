export default function filterByID(ID,iteratable){
    let filteredID = -1;

    iteratable.forEach((element,index) => {
        if(element.ID === parseInt(ID)){
            filteredID = index;
        }
    });

    return filteredID;
}