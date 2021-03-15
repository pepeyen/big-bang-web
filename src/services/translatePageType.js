const translatePageType = (pageType) => {
    switch (pageType){
        case 'post':
            return 'blog';
        case 'course':
            return 'courses';
        case 'podcast':
            return 'podcasts';
        case 'product':
            return 'store';
        default:
            return pageType;
    };
};

export default translatePageType;