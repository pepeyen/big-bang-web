/**
 * Returns the response from a blob fetching function.
 * 
 * @param {string} fileName Target filename.
 * @param {string} container Target container.
 * @param {Object} subContainer Target subcontainers.
 * @param {string} filePrefix Target file prefix.
 * @param {string} fileExtension Target file extension.
 * @returns {Promise} Promise object represents the fetch response.
 */
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