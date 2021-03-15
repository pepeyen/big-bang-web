const fetchFromBackEnd = (fetchingEndPoint,fetchingParam,fetchingOptions,fetchingBranch) => {
    fetchingBranch = fetchingBranch ?? 'v1';

    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/${fetchingBranch}/${fetchingEndPoint}?${fetchingParam}`, fetchingOptions)
        .then(response => {
            resolve(response.json());
        })
        .catch(error => {
            reject(error);
        })
    });
};

export default fetchFromBackEnd;