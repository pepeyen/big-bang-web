export function getCurrentPage(){
    const currentPageURI = window.location.hash.substr(2);
    
    return currentPageURI;
}

export function getCurrentPageID(){
    let regex = new RegExp('[\\?&]id=([^&#]*)');
    let results = regex.exec(window.location.hash);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
/*
export function getCurrentPageType(){
    let regex = new RegExp('[\\?&]type=([^&#]*)');
    let results = regex.exec(window.location.hash);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
*/
