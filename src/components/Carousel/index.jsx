import React, {useState} from 'react';

//Components
import CarouselController from './CarouselController';
import CarouselRadioList from './CarouselRadioList';

//Styles
import './carousel.scss';

function Carousel(props){
    const [currentPage,setCurrentPage] = useState(0);
    const [currentView,setCurrentView] = useState(props.children[0]);

    const controllerOnClickHandler = (target) => {
        let nextCurrentPage = 0;

        switch (target){
            case "back":
                nextCurrentPage = currentPage - 1;

                setCurrentPage(nextCurrentPage);
                setCurrentView(props.children[nextCurrentPage]);
                break;
            case "forward":
                nextCurrentPage = currentPage + 1;

                setCurrentPage(nextCurrentPage);
                setCurrentView(props.children[nextCurrentPage]);
                break;
            default:
                break;
        }
    };
    const radioOnClickHandler = (e) => {
        const nextCurrentPage = parseInt(e.target.value);
        
        if(nextCurrentPage !== currentPage){
            setCurrentPage(nextCurrentPage);
            setCurrentView(props.children[nextCurrentPage]);
        }
    };
    
    return(
        <div className="carousel">
            <div className="carousel__view">
                <CarouselController
                    controllerType="back"
                    isDisabled={currentPage === 0 ? true : false}
                    onClick={controllerOnClickHandler}
                />
                {currentView} 
                <CarouselController
                    controllerType="forward"
                    isDisabled={currentPage === (props.children.length - 1) ? true : false}
                    onClick={() => {controllerOnClickHandler("forward")}}
                />
            </div>
            <CarouselRadioList
                onClick={radioOnClickHandler}
                currentPage={currentPage}
                buttonCount={props.children.length}
            />
        </div>
    );
}

export default Carousel;