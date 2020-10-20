import React from 'react';
import BeersContainer from '../Components/BeersContainer'

function Favorites(props) {
    return (
        <BeersContainer favorites={props.favorites} products={Object.values(props.favorites)} toggleFavorite={props.toggleFavorite}/>
    );
}

export default Favorites;