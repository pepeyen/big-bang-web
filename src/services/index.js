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

export const fetchFromBlob = (fileName,container,subContainer,filePrefix,fileExtension) => {
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

export const fetchFromBackEnd = (fetchingEndPoint,fetchingParam,fetchingOptions,fetchingBranch) => {
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

export const disableElement = (targetElementID) => {
    document.getElementById(targetElementID).style.pointerEvents = 'none';
    document.getElementById(targetElementID).style.opacity = 0.4;
};

export const moveInArray = function (arr, from, to){
	if(Object.prototype.toString.call(arr) !== '[object Array]') {
		throw new Error('Please provide a valid array');
	}

	const item = arr.splice(from, 1);

	if(!item.length){
		throw new Error('There is no item in the array at index ' + from);
	}

	arr.splice(to, 0, item[0]);
};

export const renderSearchModal = (canvasId) => {
    if(!document.getElementById('modal-search')){
        const targetCanvas = document.getElementById(canvasId);

        const modal = document.createElement('div');
        const modalHeaders = document.createElement('div');
        const modalSubmitButton = document.createElement('button');
        const modalInput = document.createElement('input');
        const modalExitButton = document.createElement('button');
        const modalResults = document.createElement('div');

        modal.id = 'modal-search';
        modal.classList.add('modal');
        modal.classList.add('--search');
        modalHeaders.classList.add('modal__headers');
        modalSubmitButton.classList.add('modal__button');
        modalInput.classList.add('modal__input');
        modalExitButton.classList.add('modal__button');
        modalResults.classList.add('modal__results');

        const fetchSearch = () => {
            fetchFromBackEnd('search', `search_query=${modalInput.value}`, {method: 'GET'})
            .then(data => {
                const modalResultsContent = document.createElement('div');

                while(modalResultsContent.childNodes.length > 0){
                    modalResultsContent.removeChild(modalResultsContent.childNodes[0]);
                }

                if(data.sucess === false){
                    const modalResultsFeedback = document.createElement('span');
                    
                    modalResultsFeedback.classList.add('modal__results-feedback');
                    modalResultsFeedback.textContent(data.description);

                    modalResults.appendChild(modalResultsFeedback);
                }else{
                    const resultTypeList = Object.keys(data.searchResult);
                    
                    resultTypeList.forEach(resultType => {
                        const resultTypeDivisor = document.createElement('div');
                        const resultTypeDivisorButton = document.createElement('button');
                        const resultTypeDivisorButtonTitle = document.createElement('span');
                        const resultTypeDivisorButtonCount = document.createElement('span');

                        resultTypeDivisor.classList.add('result__divisor');
                        resultTypeDivisorButton.classList.add('result__divisor-header');
                        resultTypeDivisorButtonTitle.textContent = resultType.charAt(0).toUpperCase() + resultType.slice(1).toLowerCase();
                        resultTypeDivisorButtonCount.textContent = data.searchResult[resultType].length;

                        resultTypeDivisorButton.appendChild(resultTypeDivisorButtonTitle);
                        resultTypeDivisorButton.appendChild(resultTypeDivisorButtonCount);
                        resultTypeDivisor.appendChild(resultTypeDivisorButton);
                        modalResults.appendChild(resultTypeDivisor);
                    });
                }
            })
        };

        modalSubmitButton.onclick = (() => {
            fetchSearch();
        });

        modalInput.onkeypress = ((event) => {
            if(event.key === 'Enter'){
                fetchSearch();
            }
        });

        modalExitButton.onclick = (() => {
            targetCanvas.removeChild(modal)
        });

        const modalPendingHeaderList = [modalSubmitButton, modalInput, modalExitButton];

        modalPendingHeaderList.forEach(pendingHeader => {
            modalHeaders.appendChild(pendingHeader);
        });

        const modalPendingChildList = [modalHeaders, modalResults];

        modalPendingChildList.forEach(pendingChild => {
            modal.appendChild(pendingChild);
        });
        targetCanvas.appendChild(modal);
    }
};