import React from 'react';

//Images
import img_product1 from '../../assets/images/product/product1.jpg';
import img_product2 from '../../assets/images/product/product2.jpg';
import img_product3 from '../../assets/images/product/product3.jpg';

function Produto(){
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
    ];
    return(
        <div>
            <img src={productList[sessionStorage.getItem('currentProductId')].productImage} alt={productList[sessionStorage.getItem('currentProductId')].productName} />
            <p>{productList[sessionStorage.getItem('currentProductId')].productName}</p>
            <p>{productList[sessionStorage.getItem('currentProductId')].productInfo}</p>
            <p>{productList[sessionStorage.getItem('currentProductId')].productPrice}</p>
        </div>
    );
}

export default Produto;