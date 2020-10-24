import React from 'react';
import BeersItems from './BeersItems'
import NoResults from './NoResults'
import BeersContainerSC from './styled/BeersContainerSC'

const BeersContainer = (props) => {
    const { products } = props

    return (
        <BeersContainerSC>
            {
                products.length > 0?
                <BeersItems products={products}/>
                :
                <NoResults message={"no results"}/>
            }
        </BeersContainerSC>
    );
}

export default BeersContainer;