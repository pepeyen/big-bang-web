/**
 * Returns the current URI without the protocol nor the domain name.
 * 
 * @returns {string} Stripped URI without the protocol nor the domain name.
 */
const getCurrentPageURI = () => {
    const currentPageURI = window.location.hash.substr(2);

    return currentPageURI;
};

export default getCurrentPageURI;