/**
 * Appends the generated paths into a target SVG Element.
 * 
 * @param {SVGSVGElement} targetSVG Target SVG Element.
 * @param {Object[]} pathList The list containing all desired path(s) value(s).
 */
const insertSVGPaths = (targetSVG, pathList) => {
    for(const currentPath of pathList){
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg','path');

        for(const [key, value] of Object.entries(currentPath)){
            pathElement.setAttribute(key, value);
        };

        targetSVG.appendChild(pathElement);
    };
};

export default insertSVGPaths;