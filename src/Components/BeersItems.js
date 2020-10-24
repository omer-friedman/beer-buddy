import React from 'react';
import BeerCard from './BeerCard'

const BeersItems = (props) => {
    const { products } = props;

    return (
        products.map(product =>
            <div key={product.id}>
                <BeerCard product={product} />
            </div>
        )
    );
}

export default BeersItems;