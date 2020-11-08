import React, {
    useEffect,
    useState
} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {Navbar} from '../components';

//Services
import {getCurrentPageID} from '../services';

const Product = () => {
    const [product,setProduct] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/products/${getCurrentPageID()}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.success === false){
                setProduct(-1);
            }else{
                setIsLoading(false);
                setProduct(data.products);
            }
        })
    },[]);

    if(product !== -1 && getCurrentPageID() !== null){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={isLoading ? "page --loading" : "page"}>
                        <div className="page__product">
                            <img 
                                className="page__product-image"
                                src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/product/bg-${getCurrentPageID()}.jpg`} 
                                alt={product.product_name ? product.product_name : 'Loading'} 
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{product.product_name ? product.product_name : 'Loading'}</p>
                                <p className="page__filler-product-info">{product.product_description ? product.product_description : 'Loading'}</p>
                                <p className="page__filler-product-price">R$ {product.product_price ? product.product_price.toFixed(2) : 0}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Product;