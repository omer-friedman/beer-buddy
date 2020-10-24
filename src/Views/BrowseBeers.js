import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAxiosGet } from '../hooks/HttpHelper';
import { buildUrl } from '../hooks/UrlHelper';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';
import BeersContainer from '../components/BeersContainer';
import SearchBar from '../components/SearchBar';
import NoResults from '../components/NoResults';
import { BrowseContainer, PaginationArrow } from '../components/styled/BrowsBeersSC';
import { pageChanged } from '../actions/browseActions';

const BrowseBeers = () => {
    let perPage = '8'
    let content = null
    const baseUrl = `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`
    const [url, setUrl] = useState(baseUrl)
    const dispatch = useDispatch()
    const pageNum = useSelector(state => state.browseReducer.currentPage)
    const filters = useSelector(state => state.searchReducer.filters)
    let products = useAxiosGet(url)
    let isBackButton = products.data?  products.data.length.toString() === perPage : false;

    
    const moveToPage = useCallback((pageNum, filters = {}) => {
        dispatch(pageChanged(pageNum))
        setUrl(buildUrl(baseUrl, {...filters, page: pageNum}))
    }, [baseUrl, dispatch]);

    useEffect(()=>{
        moveToPage(1, filters)
    }, [filters, moveToPage])


    if(products.error){
        content= <NoResults message={"Something went wrong"}/>
    }

    if(products.loading){
        content = <Loader/>
    }

    if(products.data){
        content = 
        <>  
            <SearchBar />
            <BrowseContainer>
                <PaginationArrow icon={faAngleLeft} isvisible={pageNum > 1? 1 : 0} onClick={() => moveToPage(pageNum-1)} />
                <BeersContainer products={products.data}/>
                <PaginationArrow icon={faAngleRight} isvisible={isBackButton? 1 : 0} onClick={() => moveToPage(pageNum+1)} />
            </BrowseContainer>
            {/* <SearchBar showSearch={showSearch} setShowSearch={() => setShowSearch(!showSearch)} itemsSelected={itemsSelected} setItemsSelected={setItemsSelected}/>
            <BrowseContainer>
                <PaginationArrow icon={faAngleLeft} isvisible={pageNum > 1? 1 : 0} onClick={() => moveToPage(pageNum-1)} />
                <BeersContainer favorites={props.favorites} products={products.data} toggleFavorite={props.toggleFavorite} noResults={()=>{setUrl(baseUrl); setItemsSelected({})}}/>
                <PaginationArrow icon={faAngleRight} isvisible={products.data.length.toString() === perPage? 1 : 0} onClick={() => moveToPage(pageNum+1)} />
            </BrowseContainer> */}
        </>
    }

    return (
        <>
            {content}
        </>
    );
}

export default BrowseBeers;