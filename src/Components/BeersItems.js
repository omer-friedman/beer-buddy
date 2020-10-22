import React from 'react';
import BeerCard from './BeerCard'


function BeersItems(props) {
    const products = props.products;
    const favorites = props.favorites;

    return (
        products.map(product =>
            <div key={product.id}>
                <BeerCard product={
                    (product.id in favorites)? 
                    favorites[product.id] : 
                    product
                }
                isFavorite={product.id in favorites} toggleFavorite={props.toggleFavorite}/>
            </div>
        )
    );
}

export default BeersItems;