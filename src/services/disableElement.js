/**
 * Directly disables the desired element to disabled.
 * 
 * @param {string} targetElementID Target element who will be disabled.
 */
const disableElement = (targetElementID) => {
    document.getElementById(targetElementID).style.pointerEvents = 'none';
    document.getElementById(targetElementID).style.opacity = 0.4;
};

export default disableElement;