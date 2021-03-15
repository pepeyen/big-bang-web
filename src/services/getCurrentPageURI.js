const getCurrentPageURI = () => {
    const currentPageURI = window.location.hash.substr(2);

    return currentPageURI;
};

export default getCurrentPageURI;