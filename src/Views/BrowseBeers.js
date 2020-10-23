import React, { useEffect, useState } from 'react';
import { useAxiosGet } from '../Hooks/HttpHelper'
import { buildUrl } from '../Hooks/UrlHelper'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Loader from '../Components/Loader';
import BeersContainer from '../Components/BeersContainer'
import SearchBar from '../Components/SearchBar'
import NoResults from '../Components/NoResults';
import { BrowseContainer, PaginationArrow } from '../Components/Styled/BrowsBeersSC'

function BrowsBeers(props) {
    let perPage = '8'
    let content = null
    const baseUrl = `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`
    const [url, setUrl] = useState(baseUrl)
    const [curPage, setCurPage] = useState(1)
    const [showSearch, setShowSearch] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [itemsSelected, setItemsSelected] = useState({})
    let products = useAxiosGet(url)

    const handlePagination = (newPage) =>{
        setCurPage(newPage)
        setUrl(buildUrl(baseUrl, {page: newPage}))
    }

    useEffect(()=>{
        let nowPage = curPage;
        if(isSearch){
            setCurPage(1)
            nowPage = 1
            setIsSearch(false)
        }
        setUrl(buildUrl(baseUrl, {...itemsSelected, page: nowPage}))
    }, [itemsSelected])


    if(products.error){
        content= <NoResults noResults={()=>setUrl(baseUrl)} message={"Woops.. something went wrong"}/>
    }

    if(products.loading){
        content = <Loader/>
    }

    if(products.data){
        content = 
        <>  
            <SearchBar onSearch={() => setIsSearch(true)} showSearch={showSearch} setShowSearch={setShowSearch} itemsSelected={itemsSelected} setItemsSelected={setItemsSelected}/>
            <BrowseContainer>
                <PaginationArrow icon={faAngleLeft} isvisible={curPage > 1? 1 : 0} onClick={() => handlePagination(curPage-1)} />
                <BeersContainer favorites={props.favorites} products={products.data} toggleFavorite={props.toggleFavorite} noResults={()=>{setUrl(baseUrl); setItemsSelected({})}}/>
                <PaginationArrow icon={faAngleRight} isvisible={products.data.length == perPage? 1 : 0} onClick={() => handlePagination(curPage+1)} />
            </BrowseContainer>
        </>
    }

    return (
        <>
            {content}
        </>
    );
}

export default BrowsBeers;