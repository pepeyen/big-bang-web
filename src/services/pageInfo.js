export const getCurrentPageURI = () => {
    const currentPageURI = window.location.hash.substr(2);
    
    return currentPageURI;
}
export const getCurrentPageID = () => {
    let regex = new RegExp('[\\?&]id=([^&#]*)');
    let results = regex.exec(window.location.hash);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
