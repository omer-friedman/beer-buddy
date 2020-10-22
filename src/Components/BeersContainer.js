import React from 'react';
import BeersItems from './BeersItems'
import NoResults from './NoResults'
import BeersContainerSC from './Styled/BeersContainerSC'

function BeersContainer(props) {
    const {products, favorites} = props

    return (
        <BeersContainerSC>
                {
                    products.length > 0?
                    <BeersItems products={products} favorites={favorites} toggleFavorite={props.toggleFavorite}/>
                    :
                    <NoResults noResults={props.noResults} message={"no results"}/>
                }
        </BeersContainerSC>
    );
}

export default BeersContainer;