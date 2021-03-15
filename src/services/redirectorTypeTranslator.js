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