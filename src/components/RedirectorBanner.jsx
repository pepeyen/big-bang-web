import React from 'react';

const RedirectorBanner = (props) => {
    if(props.type === 'podcast'){
        return(
            <div 
                className="page__redirector-banner" 
                style={{backgroundImage: `url(${props.url})`}}
            >
                <svg
                    className="page__button-play" 
                    viewBox="0 0 288 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M279.84 146.049L23.84 2.04861C18.88 -0.735386 12.832 -0.671386 7.936 2.17661C3.008 5.05661 0 10.3046 0 16.0006V304.001C0 309.697 3.008 314.945 7.936 317.825C10.432 319.265 13.216 320.001 16 320.001C18.688 320.001 21.408 319.329 23.84 317.953L279.84 173.953C284.864 171.105 288 165.793 288 160.001C288 154.209 284.864 148.897 279.84 146.049Z"
                        fill="white"
                    />
                </svg>
            </div>
        )
    }else{
        return(
            <img 
                className="page__redirector-banner"
                src={props.url}
                alt={props.alt} 
            />
        );
    }
}

export default RedirectorBanner;