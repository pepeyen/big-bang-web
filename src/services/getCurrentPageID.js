/**
 * Returns the id query value from a given URI.
 * 
 * @param {string} URIPathname Target page URI.
 * @returns {string} Current page id if valid.
 */
const getCurrentPageID = (URIPathname) => {
    let regex = new RegExp('[\\?&]id=([^&#]*)'),
        results = regex.exec(URIPathname);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default getCurrentPageID;