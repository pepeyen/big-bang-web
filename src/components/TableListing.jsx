import React from 'react';

const TableListing = (props) => {
    return(
        <div className={`--table-${props.listingType}`}>
            {props.children}
        </div>
    );
}

export default TableListing;