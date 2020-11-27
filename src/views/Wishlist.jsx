import React from 'react';
import {useSelector} from 'react-redux';

//Components
import {
    TableListing,
    ProductCard,
    Page,
    Post
} from '../components';

const WishList = () => {
    const likedItems = useSelector(state => state.likedItems);

    if(likedItems.products === undefined || likedItems.products.likedItemsList.length === 0 ){
        return(
            <Page pageTitle="Wishlist">
                <Post>
                    <span className="page__feedback">Your wishlist is empty</span>
                </Post>
            </Page>
        );
    }else{
        return(
            <Page pageTitle="Wishlist">
                <Post>
                    <TableListing listingType="four-desktop">
                        {
                            likedItems.products.likedItemsList.map((element, index) => {
                                return(
                                    <ProductCard
                                        key={index}
                                        productID={element}
                                    />
                                );
                            })
                        }
                    </TableListing>
                </Post>
            </Page>
        );
    }
};

export default WishList;