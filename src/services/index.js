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

export const getCurrentPageURIManual = (URIHash) => {
    const currentPageURI = URIHash.split('/');

    return currentPageURI[1] === "user" ? currentPageURI[1] : currentPageURI[currentPageURI.length - 1];
};

export const getCurrentPageURI = () => {
    const currentPageURI = window.location.hash.substr(2);

    return currentPageURI;
};

export const getCurrentPageID = (URIPathname) => {
    let regex = new RegExp('[\\?&]id=([^&#]*)');
    let results = regex.exec(URIPathname);
    
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const getCurrentPageType = (URIPathname) => {
    let regex = new RegExp('[\\?&]type=([^&#]*)');
    let results = regex.exec(URIPathname);
    
    return results === null ? URIPathname : decodeURIComponent(results[1].replace(/\+/g, ' ')); 
};

export const getCurrentPageUser = (URIPathname) => {
    const splitted = URIPathname.split('/');

    return splitted[2];
};

const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

const translateMonth = (month) => {
    let translatedMonth = -1;

    MONTHS.forEach((element,index) => {
        if(index === month){
            translatedMonth = element;
        }
    });

    return  translatedMonth;
};

export const timeConverter = (dateString) => {
    const date = new Date(dateString);

    return {
        day: ("0" + date.getDate()).slice(-2), 
        month: translateMonth(date.getMonth()), 
        year: date.getFullYear()
    };
};

export const calcDateDiff = (startDate,endDate) => {
    const firstDate = new Date(startDate);
    const lastDate = new Date(endDate);

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
            return pageType;
    }
};

export const fetchFromBlob = (id,container,subContainer,filePrefix,fileExtension) => {
    return new Promise((resolve, reject) =>{  
        fetch(`${process.env.REACT_APP_BLOB_HOST}/${container}/${subContainer}/${filePrefix}-${id}.${fileExtension}`, {
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

export const fetchFromBackEnd = (fetchinEndPoint,fetchingParam,fetchingOptions) => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/${fetchinEndPoint}/${fetchingParam}`, fetchingOptions)
        .then(response => {
            resolve(response.json());
        })
        .catch(error => {
            reject(error);
        })
    });
};

export const secondsToMinutes = (valueInSeconds) => {
    const minutes = Math.floor(valueInSeconds / 60);
    const seconds = Math.floor(valueInSeconds - (minutes * 60));

    return (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}`: seconds);
};

export const getMouseClickPosition = (event, axys, componentId) => {
    const component = document.getElementById(componentId);
    let clickedPosition, componentFullSize;

    if(axys === 'x'){
        clickedPosition = event.pageX - component.offsetLeft;
        componentFullSize = component.offsetWidth;
    }else{
        if(axys === 'y'){
            clickedPosition = event.pageY - component.offsetTop;
            componentFullSize = component.offsetHeight;
        }
    }

    return  clickedPosition / componentFullSize;  
};

export const deleteFromObject = (targetProperty, targetObject) => {
    const resultObject = {...targetObject};

    delete resultObject[targetProperty];

    return resultObject;
};