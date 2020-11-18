import React, {
    useState,
    useEffect
} from 'react';
import {Link} from 'react-router-dom';

//Components
import {Loader} from './index';

const FillerProduct = (props) => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/products/offset/${props.productCount}`, {
            method: 'GET'
        })
        .then(result => {
            return result.json();
        })
        .then(data => {
            setIsLoading(false);
            setProducts(data.products);
        })
    },[props.productCount]);

    if(isLoading === true){
        return <Loader isLoading={true} />
    }else{
        return(
            products.map((element,index) => {
                return(
                    <li 
                        key={index}
                        className="page__filler-product --centralized-text"
                    >
                        <Link to={`/store/post?id=${element.product_id}&type=product`}>
                            <img
                                className="page__filler-product-image"
                                src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/product/bg-${element.product_id}.jpg`}
                                alt={element.product_name}
                            />
                            <span className="page__filler-product-name --dark-text">{element.product_name}</span>
                            <p className="page__filler-product-info --grey-text">{element.product_description === null ? '\u00A0' : element.product_description}</p>
                            <span className="page__filler-product-price --dark-text">R$ {element.product_price.toFixed(2)}</span>
                        </Link>
                    </li>
                );
            })
        );
    }
}

export default FillerProduct;