const getMouseClickPosition = (event, axys, componentId) => {
    const component = document.getElementById(componentId);
    let clickedPosition, componentFullSize;

    if(axys === 'x'){
        clickedPosition = event.pageX - component.offsetLeft;
        componentFullSize = component.offsetWidth;
    }else{
        if(axys === 'y'){
            clickedPosition = event.pageY - component.offsetTop;
            componentFullSize = component.offsetHeight;
        }
    };

    return  clickedPosition / componentFullSize;  
};

export default getMouseClickPosition;