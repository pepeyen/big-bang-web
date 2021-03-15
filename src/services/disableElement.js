const disableElement = (targetElementID) => {
    document.getElementById(targetElementID).style.pointerEvents = 'none';
    document.getElementById(targetElementID).style.opacity = 0.4;
};

export default disableElement;