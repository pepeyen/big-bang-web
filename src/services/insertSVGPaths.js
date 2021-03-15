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