import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


function SearchBar(props) {
    const [showSearch, setShowSearch] = useState(false)
    const inpRef = React.createRef();

    useEffect(()=>{
        inpRef.current.focus();
    }, [showSearch])

    const searchClickHandler = () =>{
        if(showSearch)
            props.onSearch('food', inpRef.current.value)
    }

    return (
        <div className="flex flex-row items-center ml-48 mb-3 text-gray-600 shadow h-12 p-3 searchBar">
                <span className={`uppercase mr-4 ${!showSearch? 'hidden':''}`}>food pairing</span>
                <input ref={inpRef} type="text" className={`fdInput ${!showSearch? 'hidden':''}`} />
                <FontAwesomeIcon icon={faSearch} className={`cursor-pointer mr-4 ${!showSearch? 'opacity-25 cursor-context-menu': ''}`} onClick={() => searchClickHandler()}/>
                {
                    showSearch?
                    <FontAwesomeIcon icon={faAngleLeft} className="cursor-pointer" onClick={() => setShowSearch(false)}/>:
                    <FontAwesomeIcon icon={faAngleRight} className="cursor-pointer" onClick={() => setShowSearch(true)}/>
                }
        </div>
    );
}

export default SearchBar;