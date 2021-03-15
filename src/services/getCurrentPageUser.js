const getCurrentPageUser = (URIPathname) => {
    const splitted = URIPathname.split('/');

    return splitted[2];
};

export default getCurrentPageUser;