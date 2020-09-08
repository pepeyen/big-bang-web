export default function getCurrentPage(){
    let currentPageURI = window.location.hash.substr(2);
    
    return currentPageURI;
}