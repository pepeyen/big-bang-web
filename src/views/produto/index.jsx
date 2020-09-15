import React from 'react';

//Components
import Navbar from '../../components/Navbar';

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
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <div className="page__product">
                        <img 
                            className="page__product-image"
                            src={productList[sessionStorage.getItem('currentProductId')].productImage} alt={productList[sessionStorage.getItem('currentProductId')].productName} 
                        />
                        <div className="page__product-info">
                            <p className="page__filler-product-name">{productList[sessionStorage.getItem('currentProductId')].productName}</p>
                            <p className="page__filler-product-info">{productList[sessionStorage.getItem('currentProductId')].productInfo}</p>
                            <p className="page__filler-product-price">R$ {productList[sessionStorage.getItem('currentProductId')].productPrice.toFixed(2)}</p>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Produto;