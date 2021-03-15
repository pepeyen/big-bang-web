const getCurrentPageID = (URIPathname) => {
    let regex = new RegExp('[\\?&]id=([^&#]*)'),
        results = regex.exec(URIPathname);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default getCurrentPageID;