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

const insertSVGPaths = (targetSVG, pathList) => {
    for(const currentPath of pathList){
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg','path');

        for(const [key, value] of Object.entries(currentPath)){
            pathElement.setAttribute(key, value);
        }

        targetSVG.appendChild(pathElement);
    }
}

export const renderSearchModal = (canvasId) => {
    if(!document.getElementById('modal-search')){
        const targetCanvas = document.getElementById(canvasId);

        const modal = document.createElement('div');
        const modalHeaders = document.createElement('div');
        const modalInputArea = document.createElement('div');
        const modalSubmitButton = document.createElement('button');
        const modalInput = document.createElement('input');
        const modalExitButton = document.createElement('button');
        const modalResults = document.createElement('div');
        const submitButtonImage = document.createElementNS('http://www.w3.org/2000/svg','svg');
        const exitButtonImage = document.createElementNS('http://www.w3.org/2000/svg','svg');

        modal.id = 'modal-search';
        modal.classList.add('modal');
        modal.classList.add('--search');
        modalHeaders.classList.add('modal__headers');
        modalInputArea.classList.add('modal__input-area');
        modalSubmitButton.classList.add('modal__button');
        modalInput.classList.add('modal__input');
        modalExitButton.classList.add('modal__button');
        modalResults.classList.add('modal__results');

        const fetchSearch = () => {
            modalInputArea.classList.add('--result-is-loading');

            fetchFromBackEnd('search', `search_query=${modalInput.value}`, {method: 'GET'})
            .then(data => {
                while(modalResults.childNodes.length > 0){
                    modalResults.removeChild(modalResults.childNodes[0]);
                }

                if(data.success === false){
                    const modalResultsFeedback = document.createElement('span');
                    
                    modalResultsFeedback.classList.add('modal__results-feedback');
                    modalResultsFeedback.textContent = data.description;

                    modalResults.appendChild(modalResultsFeedback);
                }else{
                    const resultTypeList = Object.keys(data.searchResult);
                    
                    resultTypeList.forEach(resultType => {
                        const resultTypeDivisor = document.createElement('div');
                        const resultTypeDivisorButton = document.createElement('button');
                        const resultTypeDivisorButtonTitle = document.createElement('span');
                        const resultTypeDivisorButtonCount = document.createElement('span');

                        resultTypeDivisor.classList.add('modal__divisor');
                        resultTypeDivisorButton.classList.add('modal__divisor-header');
                        resultTypeDivisorButtonTitle.textContent = resultType.charAt(0).toUpperCase() + resultType.slice(1).toLowerCase();
                        resultTypeDivisorButtonCount.textContent = data.searchResult[resultType].length;

                        resultTypeDivisorButton.appendChild(resultTypeDivisorButtonTitle);
                        resultTypeDivisorButton.appendChild(resultTypeDivisorButtonCount);
                        resultTypeDivisor.appendChild(resultTypeDivisorButton);

                        resultTypeDivisor.onclick = (() => {
                            if(resultTypeDivisor.childNodes.length === 1){
                                for(const currentResult of data.searchResult[resultType]){
                                    const divisorHeadline = document.createElement('p');
                                    divisorHeadline.classList.add('modal__divisor-headline');

                                    for(const [key, value] of Object.entries(currentResult)){
                                        const currentKeyType = key.split('_')[key.split('_').length - 1];

                                        if(currentKeyType === 'name' || currentKeyType === 'title'){
                                            const divisorHeadlineText = document.createElement('span');

                                            divisorHeadlineText.textContent = value;

                                            divisorHeadline.appendChild(divisorHeadlineText);
                                        }
    
                                        resultTypeDivisor.appendChild(divisorHeadline);
                                    }
                                }
                            }else{
                                while(resultTypeDivisor.childNodes.length > 1){
                                    if(resultTypeDivisor.childNodes[1].tag !== 'button'){
                                        resultTypeDivisor.removeChild(resultTypeDivisor.childNodes[1]);
                                    }
                                }
                            }
                        });

                        modalResults.appendChild(resultTypeDivisor);
                    });
                }

                modalInputArea.classList.remove('--result-is-loading');
            });
        };
        modalInput.setAttribute('placeholder', 'Type to search');

        submitButtonImage.setAttribute('viewBox', '0 0 24 24');
        submitButtonImage.setAttribute('fill', 'none');
        exitButtonImage.setAttribute('viewBox', '0 0 512.001 512.001');
        exitButtonImage.setAttribute('fill', 'none');

        const submitButtonSVGPaths = [
            {
                d: 'M23.8594 22.5938C23.9531 22.6875 24 22.8281 24 22.9688C24 23.1562 23.9531 23.2969 23.8594 23.3906L23.3906 23.8125C23.25 23.9531 23.1094 24 22.9688 24C22.7812 24 22.6875 23.9531 22.5938 23.8125L16.5469 17.7656C16.4062 17.6719 16.3594 17.5781 16.3594 17.3906V16.9219C15.4688 17.7656 14.4375 18.375 13.3125 18.8438C12.1875 19.3125 10.9688 19.5 9.75 19.5C7.96875 19.5 6.32812 19.0781 4.82812 18.1875C3.32812 17.3438 2.15625 16.1719 1.3125 14.6719C0.421875 13.1719 0 11.5312 0 9.75C0 7.96875 0.421875 6.375 1.3125 4.875C2.15625 3.375 3.32812 2.20312 4.82812 1.3125C6.32812 0.46875 7.96875 0 9.75 0C11.5312 0 13.125 0.46875 14.625 1.3125C16.125 2.20312 17.2969 3.375 18.1875 4.875C19.0312 6.375 19.5 7.96875 19.5 9.75C19.5 11.0156 19.2656 12.2344 18.7969 13.3594C18.3281 14.4844 17.7188 15.5156 16.9219 16.3594H17.3906C17.5312 16.3594 17.6719 16.4531 17.8125 16.5469L23.8594 22.5938ZM9.75 18C11.25 18 12.6094 17.6719 13.875 16.9219C15.1406 16.1719 16.125 15.1875 16.875 13.9219C17.625 12.6562 18 11.25 18 9.75C18 8.25 17.625 6.89062 16.875 5.625C16.125 4.35938 15.1406 3.375 13.875 2.625C12.6094 1.875 11.25 1.5 9.75 1.5C8.25 1.5 6.84375 1.875 5.57812 2.625C4.3125 3.375 3.32812 4.35938 2.57812 5.625C1.82812 6.89062 1.5 8.25 1.5 9.75C1.5 11.25 1.82812 12.6562 2.57812 13.9219C3.32812 15.1875 4.3125 16.1719 5.57812 16.9219C6.84375 17.6719 8.25 18 9.75 18Z',
                fill: '#666666' 
            }
        ];

        const exitButtonSVGPaths = [
            {
                d: "M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z",
                fill: '#666666'
            }
        ];

        insertSVGPaths(submitButtonImage ,submitButtonSVGPaths);
        insertSVGPaths(exitButtonImage , exitButtonSVGPaths);

        modalSubmitButton.appendChild(submitButtonImage);
        modalExitButton.appendChild(exitButtonImage);

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

        const modalInputAreaList = [modalSubmitButton, modalInput];

        modalInputAreaList.forEach(pendingInputArea => {
            modalInputArea.appendChild(pendingInputArea);
        });

        const modalPendingHeaderList = [modalInputArea, modalExitButton];

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