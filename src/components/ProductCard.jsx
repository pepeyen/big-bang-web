import React, {
    useState,
    useEffect
} from 'react';

//Components
import {
    Loader,
    LikeButton
} from './index';


const ProductCard = (props) => {
    const [product,setProduct] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/products/${props.productID}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setProduct(data.products);
            setIsLoading(false);
        })
    },[props.productID]);

    if(isLoading === true){
        return (
            <Loader isLoading={true} />
        );
    }else{
        return(
            <div className="card__product">
                <div 
                    className="card__product-banner"
                    style={{backgroundImage: `url(${`${process.env.REACT_APP_BLOB_HOST}/jpeg/product/bg-${product.product_id}.jpg`})`}}
                >
                    <LikeButton 
                        toBeLiked={product.product_id}
                        itemType="product"
                    />
                </div>
                <p className="card__product-title --dark-text">{product.product_name}</p>
                <p className="card__product-description --grey-text">{product.product_description === '' ? '\u00A0' : product.product_descriptio}</p>
                <span className="card__product-price --medium-grey-text">R$ {product.product_price.toFixed(2)}</span>
            </div>
        );
    }
}

export default ProductCard;