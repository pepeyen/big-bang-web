const fetchFromBlob = (fileName,container,subContainer,filePrefix,fileExtension) => {
    return new Promise((resolve, reject) =>{  
        fetch(`${process.env.REACT_APP_BLOB_HOST}/${container}/${subContainer}/${filePrefix}-${fileName}.${fileExtension}`, {
            method: 'GET'
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })
    });
};

export default fetchFromBlob;