import React, {
    useEffect,
    useState
} from 'react';

const HamburguerMenu = () => {
    const [isItemsVisible, setIsItemsVisible] = useState(false);
    
    useEffect(() => {
        document.getElementById('hamburguer-menu-items').style.display = isItemsVisible ? 'flex' : 'none';

        if(isItemsVisible){
            document.getElementById('hamburguer-menu').classList.add('--is-active');
        }else{
            document.getElementById('hamburguer-menu').classList.remove('--is-active');
        }
    },[isItemsVisible]);

    const onClickHandler = () => {
        setIsItemsVisible(!isItemsVisible);
    };

    return(
        <div
            id='hamburguer-menu'
            className="hamburguer-menu"
        >
            <button
                className="hamburguer-menu__button"
                onClick={onClickHandler}
            >
                <svg 
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M501.333 54H10.667C4.779 54 0 61.8403 0 71.5C0 81.1597 4.779 89 10.667 89H501.334C507.222 89 512.001 81.1597 512.001 71.5C512.001 61.8403 507.221 54 501.333 54Z"
                        fill="#666666"
                    />
                    <path
                        d="M501.333 245.333H10.667C4.779 245.333 0 253.173 0 262.833C0 272.493 4.779 280.333 10.667 280.333H501.334C507.222 280.333 512.001 272.493 512.001 262.833C512.001 253.173 507.221 245.333 501.333 245.333Z"
                        fill="#666666"
                    />
                    <path
                        d="M501.333 437H10.667C4.779 437 0 444.839 0 454.499C0 464.159 4.779 472 10.667 472H501.334C507.222 472 512.001 464.159 512.001 454.499C512 444.839 507.221 437 501.333 437Z"
                        fill="#666666"
                    />
                </svg>
            </button>
            <ul
                id="hamburguer-menu-items" 
                className="hamburguer-menu__items"
            >
            </ul>
        </div>
    );
};

export default HamburguerMenu;