import React from 'react';

function TableListing(props){
    return(
        <div className={`--table-${props.listingType}`}>
            {props.children}
        </div>
    );
}

export default TableListing;