import React, {
    useState,
    useEffect
} from 'react';

//Component
import {
    Post,
    Redirector,
    RedirectorInfo,
    RedirectorText,
    RedirectorBanner,
    Loader
} from '../components';

const Store = () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/products`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.success === true){
                setIsLoading(false);
                setProducts(data.products);
            }
        })
    },[]);

    return(
        <section className="page">
            <p className="page__place-holder">Store</p>
            <Loader isLoading={isLoading} />
            <Post>
                {products.map((element,index) => {
                    return(
                        <Redirector 
                            key={index}
                            redirectorType='product'
                            redirectorID={element.product_id}
                        >
                            <RedirectorInfo>
                                <RedirectorText
                                    infoType="title"
                                    color="dark"
                                >
                                    {element.product_name}
                                </RedirectorText>
                                <RedirectorText
                                    infoType="price"
                                    color="grey"
                                >
                                    R$ {element.product_price.toFixed(2)}
                                </RedirectorText>
                            </RedirectorInfo>
                            <RedirectorBanner 
                                url={`${process.env.REACT_APP_BLOB_HOST}/jpeg/product/bg-${element.product_id}.jpg`}
                                alt={element.product_name}
                            />
                        </Redirector>
                    );
                })}
            </Post>
        </section>
    );
}

export default Store;