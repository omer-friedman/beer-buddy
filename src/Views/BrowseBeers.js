import React, { useEffect, useState } from 'react';
import { useAxiosGet } from '../Hooks/HttpHelper'
import { buildUrl } from '../Hooks/UrlHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Loader from '../Components/Loader';
import BeersContainer from '../Components/BeersContainer'
import SearchBar from '../Components/SearchBar'
import NoResults from '../Components/NoResults';

function BrowsBeers(props) {
    let perPage = '8'
    let baseUrl = `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`
    let content = null
    const [url, setUrl] = useState(baseUrl)
    const [curPage, setCurPage] = useState(1)
    const [showSearch, setShowSearch] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [itemsSelected, setItemsSelected] = useState({})
    let products = useAxiosGet(url)

    console.log("BrowseBeers")
    console.log(itemsSelected)
    console.log("********")
    
    // useEffect(()=>{
    //     setUrl(buildUrl(url, itemsSelected))
    //     console.log("useEffect")
    // }, [itemsSelected])
    

    // const handleSearch = (param, val) =>{

    //     setCurPage(1)
    //     const paramsObj = {
    //         [param]: [val, isAdd],
    //         page: curPage,
    //     }
    //     // console.log("BrowseBeers: handleSearch")
    //     // setUrl(buildUrl(url, paramsObj))
    // }

    const handlePagination = (newPage) =>{
        setCurPage(newPage)
        setUrl(buildUrl(baseUrl, {page: newPage}))
    }

    useEffect(()=>{
        console.log("isSeaerch: "+isSearch)
        let nowPage = curPage;
        if(isSearch){
            setCurPage(1)
            nowPage = 1
            setIsSearch(false)
        }
        setUrl(buildUrl(baseUrl, {...itemsSelected, page: nowPage}))
        console.log("BrowseBeers: useEffect")
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
            <div className="flex flex-row items-center justify-center">
                {
                    (curPage > 1) &&
                    <div className="text-5xl text-gray-600 cursor-pointer" onClick={() => handlePagination(curPage-1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                }
                <BeersContainer favorites={props.favorites} products={products.data} toggleFavorite={props.toggleFavorite} noResults={()=>setUrl(baseUrl)}/>
                {
                    (products.data.length == perPage) && 
                    <div className="text-5xl text-gray-600 cursor-pointer" onClick={() => handlePagination(curPage+1)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                }
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