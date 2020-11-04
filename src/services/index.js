export const filterByType = (type,iteratable) => {
    let filteredType = [];

    iteratable.forEach(element => {
        if(element.type === type){
            filteredType.push(element);
        }
    });
    return filteredType;
};

export const filterOverall = (ID,type,iteratable) => {
    let filtered = -1;

    iteratable.forEach(element => {
        if(element.ID === parseInt(ID) && element.type === type){
            filtered = element;
        }
    });

    return filtered;
};

export const findInArray = (toBeChecked,toBeFound) => {
    let isFound = false;

    toBeChecked.forEach(element => {
        if(element === toBeFound){
            isFound = true;
        }
    });

    return isFound;
};

export const filterInArray = (toBeChecked,toBeFiltered) => {
    let filteredArray = [];

    toBeChecked.forEach(element => {
        if(element !== toBeFiltered){
            filteredArray.push(element);
        }
    });

    return filteredArray;
};

export const getCurrentPageURI = () => {
    const currentPageURI = window.location.hash.substr(2);
    
    return currentPageURI;
};

export const getCurrentPageID = () => {
    let regex = new RegExp('[\\?&]id=([^&#]*)');
    let results = regex.exec(window.location.hash);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getCurrentPageType = () => {
    let regex = new RegExp('[\\?&]type=([^&#]*)');
    let results = regex.exec(window.location.hash);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' ')); 
};

export const getCurrentPageUser = () => {
    const splitted = window.location.hash.split('/');

    return splitted[2];
};

const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

const translateMonth = (month) => {
    let translatedMonth = -1;

    MONTHS.forEach((element,index) => {
        if(element === month){
            translatedMonth =  index + 1;
        }
    });

    return ("0" + translatedMonth).slice(-2);
};

export const timeConverter = (date) => {
    return {
        day: ("0" + date.day).slice(-2), 
        month: MONTHS[date.month - 1], 
        year: date.year
    };
};
export const calcDateDiff = (startDate,endDate) => {
    const firstDate = new Date(`${startDate.year}-${translateMonth(startDate.month)}-${startDate.day}`);
    const lastDate = new Date(`${endDate.year}-${translateMonth(endDate.month)}-${endDate.day}`);

    return Math.round(Math.abs(firstDate - lastDate) / (8.64 * (10**7))) + 1;
};

export const translatePageType = (pageType) => {
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
            return null;
    }
};