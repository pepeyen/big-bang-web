import React, {useState} from 'react';

//Components
import CarouselController from './CarouselController';
import CarouselRadioList from './CarouselRadioList';

const Carousel = (props) => {
    const [currentPage,setCurrentPage] = useState(0);
    const [currentView,setCurrentView] = useState(props.children === undefined ? <div className="carousel__feedback --grey-text">Please insert a Item</div> : props.children.length === undefined ? props.children : props.children[0]);
    const carouselItemsQnt = props.children === undefined ? 1 : props.children.length === undefined ?  1 : props.children.length;

    let xDown = null;
    let yDown = null;

    const controllerOnClickHandler = (target) => {
        let nextCurrentPage = 0;

        switch (target){
            case "back":
                nextCurrentPage = currentPage - 1;
                break;
            case "forward":
                nextCurrentPage = currentPage + 1;
                break;
            default:
                break;
        }

        setCurrentPage(nextCurrentPage);
        setCurrentView(props.children[nextCurrentPage]);
    };
    const radioOnClickHandler = (e) => {
        const nextCurrentPage = parseInt(e.target.value);
        
        if(nextCurrentPage !== currentPage){
            setCurrentPage(nextCurrentPage);
            setCurrentView(props.children[nextCurrentPage]);
        }
    };
    const touchStartHandler = (e) => {                                 
        xDown = e.touches[0].clientX;                                      
        yDown = e.touches[0].clientY; 
    };
    const touchMoveHandler = (e) => {
        if ( ! xDown || ! yDown || ! props.children) {
            return;
        }
        let nextCurrentPage = 0;

        let xUp = e.touches[0].clientX;                                    
        let yUp = e.touches[0].clientY;
    
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if(Math.abs( xDiff ) > Math.abs( yDiff )) {
            if(xDiff > 0) {
                if(currentPage !== carouselItemsQnt - 1){
                    nextCurrentPage = currentPage + 1;
                }else{
                    nextCurrentPage = currentPage;
                }
            } else {
                if(currentPage !== 0){
                    nextCurrentPage = currentPage - 1;
                }else{
                    nextCurrentPage = currentPage;
                }
            }               
        }else {
            if(yDiff > 0) {
                return;
            }else { 
               return;
            }                                                                 
        }

        xDown = null;
        yDown = null;

        setCurrentPage(nextCurrentPage);
        setCurrentView(props.children.length === undefined ? props.children : props.children[nextCurrentPage]);
    };

    return(
        <div 
            className="carousel"
            onTouchStart={touchStartHandler}
            onTouchMove={touchMoveHandler}
        >
            <div className="carousel__view">
                <CarouselController
                    controllerType="back"
                    isDisabled={currentPage === 0 ? true : false}
                    onClick={controllerOnClickHandler}
                />
                {currentView} 
                <CarouselController
                    controllerType="forward"
                    isDisabled={currentPage === carouselItemsQnt - 1? true : false}
                    onClick={() => {controllerOnClickHandler("forward")}}
                />
            </div>
            <CarouselRadioList
                onClick={radioOnClickHandler}
                currentPage={currentPage}
                buttonCount={carouselItemsQnt}
            />
        </div>
    );
}

export default Carousel;