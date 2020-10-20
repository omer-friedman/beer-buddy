import React from 'react';
import BeerCard from './BeerCard'

function BeersContainer(props) {
    const {products, favorites} = props

    return (
        <div className="flex flex-wrap justify-center">
                {
                    products.map(product =>
                        <div key={product.id}>
                            <BeerCard product={product} isFavorite={product.id in favorites} toggleFavorite={props.toggleFavorite}/>
                        </div>
                    )
                }
        </div>
    );
}

export default BeersContainer;