const deleteFromObject = (targetProperty, targetObject) => {
    const resultObject = {...targetObject};

    delete resultObject[targetProperty];

    return resultObject;
};

export default deleteFromObject;