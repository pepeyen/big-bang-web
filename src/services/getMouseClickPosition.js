/**
 * Returns the clicked posistion within the element from a onclick event.
 * 
 * @param {Event} event Target event.
 * @param {('x'|'y')} axys The desired axys.
 * @param {string} componentId Target component ID.
 * @returns {number} Clicked position within the element.
 */
const getMouseClickPosition = (event, axys, componentId) => {
    const component = document.getElementById(componentId);
    let clickedPosition,
        componentFullSize;

    if(axys === 'x'){
        clickedPosition = event.pageX - component.offsetLeft;
        componentFullSize = component.offsetWidth;
    }else{
        if(axys === 'y'){
            clickedPosition = event.pageY - component.offsetTop;
            componentFullSize = component.offsetHeight;
        };
    };

    return  clickedPosition / componentFullSize;  
};

export default getMouseClickPosition;