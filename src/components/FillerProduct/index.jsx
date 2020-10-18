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
                        <Link to={`/store/post/?id=${element.ID}&type=${element.type}`}>
                            <img
                                className="page__filler-product-image"
                                src={element.media.bannerURL}
                                alt="Produto"
                            />
                            <span className="page__filler-product-name --dark-text">{element.info.title}</span>
                            <p className="page__filler-product-info --grey-text">{element.info.description === '' ? '\u00A0' : element.info.description}</p>
                            <span className="page__filler-product-price --dark-text">R$ {element.info.price.toFixed(2)}</span>
                        </Link>
                    </li>
                );
            }else return undefined;
        })
    );
}

export default FillerProduct;