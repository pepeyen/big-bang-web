import React from 'react';

//Images
import img_product1 from '../../assets/images/product/product1.jpg';
import img_product2 from '../../assets/images/product/product2.jpg';
import img_product3 from '../../assets/images/product/product3.jpg';

function FillerProduct(props){
    const productList = [
        {
            productImage: img_product1,
            productName: 'Livro Acenda a Sua Luz',
            productInfo: 'Carol Rache',
            productPrice: 54.00
        },
        {
            productImage: img_product2,
            productName: 'Camiseta Solidária',
            productInfo: 'Tamanho único',
            productPrice: 149.00
        },
        {
            productImage: img_product3,
            productName: 'Tapete Viagem Pássaro',
            productInfo: '',
            productPrice: 237.00
        }
    ]
    return(
        <li className="page__filler-product --centralized-text">
            <img
                className="page__filler-product-image"
                src={productList[props.productId].productImage}
                alt="Produto"
            />
            <span class="page__filler-product-name --dark-text">{productList[props.productId].productName}</span>
            <p class="page__filler-product-info --grey-text">{productList[props.productId].productInfo === '' ? '\u00A0' : productList[props.productId].productInfo}</p>
            <span class="page__filler-product-price --dark-text">R$ {productList[props.productId].productPrice.toFixed(2)}</span>
        </li>
    );
}

export default FillerProduct;