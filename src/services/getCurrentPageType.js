const getCurrentPageType = (URIPathname) => {
    let regex = new RegExp('[\\?&]type=([^&#]*)'),
        results = regex.exec(URIPathname);
    
    return results === null ? URIPathname : decodeURIComponent(results[1].replace(/\+/g, ' ')); 
};

export default getCurrentPageType;