import React, { useState } from 'react';
import { useAxiosGet } from '../Hooks/HttpHelper'
import { buildUrl } from '../Hooks/UrlHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Loader from '../Components/Loader';
import BeersContainer from '../Components/BeersContainer'
import SearchBar from '../Components/SearchBar'

function BrowsBeers(props) {
    let baseUrl = 'https://api.punkapi.com/v2/beers?'
    let perPage = '8'
    let content = null
    const [curPage, setCurPage] = useState(1)
    const [url, setUrl] = useState(`${baseUrl}page=${curPage}&per_page=${perPage}`)
    let products = useAxiosGet(url)

    const handleSearch = (param, val) =>{
        setCurPage(1)
        setUrl(buildUrl(url, {[param]: val, page: curPage}))
    }

    const handlePagination = (newPage) =>{
        setCurPage(newPage)
        setUrl(buildUrl(url, {page: newPage}))
    }

    if(products.error){
        content= <div>error</div>
    }

    if(products.loading){
        content = <Loader/>
    }

    if(products.data){
        content = 
        <>  
            <SearchBar onSearch={handleSearch}/>
            <div className="flex flex-row items-center justify-between">
                {
                    (curPage > 1) &&
                    <div className="text-5xl text-gray-600 cursor-pointer" onClick={() => handlePagination(curPage-1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                }
                <BeersContainer favorites={props.favorites} products={products.data} toggleFavorite={props.toggleFavorite}/>
                <div className="text-5xl text-gray-600 cursor-pointer" onClick={() => handlePagination(curPage+1)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </>
    }

    return (
        <>
            {content}
        </>
    );
}

export default BrowsBeers;