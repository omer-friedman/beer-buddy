import React from 'react';
import BeersContainer from '../components/BeersContainer';
import { useAxiosGet } from '../hooks/HttpHelper';
import { useSelector } from 'react-redux';
import NoResults from '../components/NoResults';
import Loader from '../components/Loader';

const Favorites = () => {
    const favoritsIds = useSelector(state => state.favoritesReducer.favorites? Object.keys(state.favoritesReducer.favorites) : [])
    let url = favoritsIds? "https://api.punkapi.com/v2/beers?ids="+favoritsIds.join('|') : ''
    let content = null
    const products = useAxiosGet(url)

    if(products.error){
        content= <NoResults message={"Woops.. something went wrong"}/>
    }

    if(products.loading){
        content = <Loader/>
    }

    if(products.data){
        content = <BeersContainer products={products.data}/>
    }

    return (
        <>
            {content}
        </>
    );
};

export default Favorites;