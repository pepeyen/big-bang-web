/**
 * Removed a proprety from a Object.
 * 
 * @param {string} targetProperty Index name desired to be removed.
 * @param {Objec} targetObject Object which the proprety is desired to be removed.
 * @returns {Object} A new Object with the informed proprety removed.
 */
const deleteFromObject = (targetProperty, targetObject) => {
    const resultObject = {...targetObject};

    delete resultObject[targetProperty];

    return resultObject;
};

export default deleteFromObject;