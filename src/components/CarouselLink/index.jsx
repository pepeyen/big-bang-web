import React from 'react';

//Images
import img_product1 from '../../assets/images/product/product1.jpg';
import img_product2 from '../../assets/images/product/product2.jpg';
import img_product3 from '../../assets/images/product/product3.jpg';

function CarouselLink(props){
    const productsImages = [
        img_product1,
        img_product2,
        img_product3
    ]
    return(
        <li className="page__carousel-product">
            <img
                className="page__carousel-product-image"
                src={productsImages[props.productId]}
                alt="Produto"
            />
        </li>
    );
}

export default CarouselLink;