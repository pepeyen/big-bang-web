import React from 'react';
import {Link} from 'react-router-dom';

//Mock up data
import {API} from '../../services/mockData';

//Services
import {filterByType} from '../../services/filters';

function FillerProduct(props){
    const products = filterByType('product',API);
    
    return(
        products.map((element,index) => {
            if(index < props.productCount){
                return(
                    <li 
                        key={index}
                        className="page__filler-product --centralized-text"
                    >
                        <Link to={`/store/product/?id=${element.ID}`}>
                            <img
                                className="page__filler-product-image"
                                src={element.bannerURL}
                                alt="Produto"
                            />
                            <span className="page__filler-product-name --dark-text">{element.title}</span>
                            <p className="page__filler-product-info --grey-text">{element.info === '' ? '\u00A0' : element.info}</p>
                            <span className="page__filler-product-price --dark-text">R$ {element.price.toFixed(2)}</span>
                        </Link>
                    </li>
                );
            }else return undefined;
        })
    );
}

export default FillerProduct;