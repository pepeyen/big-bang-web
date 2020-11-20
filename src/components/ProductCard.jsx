import React, {
    useState,
    useEffect
} from 'react';

//Components
import {
    Loader,
    LikeButton
} from './index';

//Services
import {fetchFromBackEnd} from '../services';

const ProductCard = (props) => {
    const [product,setProduct] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetchFromBackEnd('products', props.productID, {method: 'GET'})
        .then(data => {
            if(data.success === true){
                setProduct(data.products);
                setIsLoading(false);
            }
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