const getCurrentPageURIManual = (URIHash) => {
    const currentPageURI = URIHash.split('/');

    return currentPageURI[1] === "user" ? currentPageURI[1] : currentPageURI[currentPageURI.length - 1];
};

export default getCurrentPageURIManual;