/**
 * Returns the page user name (https://domain/user/{user name}) from a given URN.
 * 
 * @param {string} URIPathname Target page URI.
 * @returns {string} Page user name.
 */
const getCurrentPageUser = (URIPathname) => {
    const splitted = URIPathname.split('/');

    return splitted[2];
};

export default getCurrentPageUser;