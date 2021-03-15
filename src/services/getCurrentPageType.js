/**
 * Returns the type query from a given URI.
 * 
 * @param {string} URIPathname Target page URI.
 * @returns {string} Current page type if valid.
 */
const getCurrentPageType = (URIPathname) => {
    let regex = new RegExp('[\\?&]type=([^&#]*)'),
        results = regex.exec(URIPathname);
    
    return results === null ? URIPathname : decodeURIComponent(results[1].replace(/\+/g, ' ')); 
};

export default getCurrentPageType;