/**
 * Returns the page type (https://domain/{type}/unwanted_data) from a given URI.
 * 
 * @param {string} URIHash Target page URI.
 * @returns {string} Page type.
 */
const getCurrentPageURIManual = (URIHash) => {
    const currentPageURI = URIHash.split('/');

    return currentPageURI[1] === "user" ? currentPageURI[1] : currentPageURI[currentPageURI.length - 1];
};

export default getCurrentPageURIManual;