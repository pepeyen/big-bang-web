import React, {
    useEffect,
    useState
} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//Actions
import {insertToCart} from '../actions';

//Components
import {
    Page,
    Post
} from '../components';

//Services
import {
    getCurrentPageID,
    fetchFromBackEnd
} from '../services';

const Product = (props) => {
    const [product,setProduct] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const currentPageId = getCurrentPageID(props.location.search);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFromBackEnd('products', currentPageId, {method: 'GET'})
        .then(data => {
            if(data.success === false){
                setProduct(-1);
            }else{
                setProduct(data.products);
                setIsLoading(false);
            }
        })
    },[currentPageId]);

    const insertProductToCart = () => {
        dispatch(insertToCart(product));
    };

    if(product !== -1 && currentPageId !== null){
        return(
            <Page isLoading={isLoading}>
                <Post>
                    <div className="page__product">
                        <img 
                            className="page__product-image"
                            src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/product/bg-${currentPageId}.jpg`} 
                            alt={product.product_name ? product.product_name : 'Loading'} 
                        />
                        <div className="page__product-info">
                            <span className="page__product-name">{product.product_name ? product.product_name : '\u00A0'}</span>
                            <span className="page__product-description --grey-text">{product.product_description ? product.product_description : '\u00A0'}</span>
                            <span className="page__product-price">R$ {product.product_price ? product.product_price.toFixed(2) : 0}</span>
                            <button
                                className="page__product-button"
                                onClick={insertProductToCart}
                            >
                                Add to the cart
                            </button>
                        </div>
                    </div>
                </Post>
            </Page>
        );
    }else return <Redirect to="/error/404" />
}

export default Product;