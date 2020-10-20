import React from 'react';
import BeerCard from './BeerCard'
import NoResults from './NoResults'

function BeersContainer(props) {
    const {products, favorites} = props

    return (
        <div className="flex flex-wrap justify-center">
                {
                    products.length > 0?
                    products.map(product =>
                        <div key={product.id}>
                            <BeerCard product={product} isFavorite={product.id in favorites} toggleFavorite={props.toggleFavorite}/>
                        </div>
                    )
                    :
                    <NoResults noResults={props.noResults} message={"no results"}/>
                }
        </div>
    );
}

export default BeersContainer;