/**
 * Returns a value if it is found inside a already set list indexes.
 * 
 * @param {string} redirectorType Desired value to be searched after.
 * @returns {string} Value if found of the searched index.
 */
const redirectorTypeTranslator = (redirectorType) => {
    const redirectorTypeList = {
        'post': 'blog',
        'product': 'store',
        'podcast': 'podcasts',
        'course': 'crouses',
        'user': 'user'
    };

    for(const [type, typeTranslated] of Object.entries(redirectorTypeList)){
        if(redirectorType === type){
            return typeTranslated;
        };
    };
};

export default redirectorTypeTranslator;