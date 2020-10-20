import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import SearchSelect from './SearchSelect'
import SearchProp from './SearchProp'


function SearchBar(props) {
    const [showSearch, setShowSearch] = [props.showSearch, props.setShowSearch]
    const [itemsSelected, setItemsSelected] = [props.itemsSelected, props.setItemsSelected]
    const [selectedKey, setKey] = useState('food')
    const [itemRemoved, setItemRemoved] = useState(false)
    const inpRef = React.createRef();

    console.log("SearchBar")

    useEffect(()=>{
        inpRef.current.focus();
    }, [showSearch])

    const searchClickHandler = () =>{
        if(showSearch){
            setItemsSelected({...itemsSelected, [selectedKey]: inpRef.current.value})
            props.onSearch.call()
        }
    }

    const searchSelectedHandler = (value) =>{
        inpRef.current.focus();
        setKey(value)
    }

    return (
        <div className="flex flex-row items-center ml-48 mb-3 text-gray-600 shadow h-12 p-3 searchBar">
                {showSearch&& <SearchSelect handleChange={searchSelectedHandler}/>}
                <input ref={inpRef} type="text" className={`fdInput ${!showSearch? 'hidden':''}`} />
                <FontAwesomeIcon icon={faSearch} className={`cursor-pointer mr-4 ${!showSearch? 'opacity-25 cursor-context-menu': ''}`} onClick={searchClickHandler}/>
                {
                    showSearch?
                    <FontAwesomeIcon icon={faAngleLeft} className="cursor-pointer" onClick={() => setShowSearch(false)}/>
                    :
                    <FontAwesomeIcon icon={faAngleRight} className="cursor-pointer" onClick={() => setShowSearch(true)}/>
                }
                {
                    Object.entries(itemsSelected).map(([key,val]) => {
                        return <SearchProp key={key} searchKey={key} searchVal={val} setItemsSelected={setItemsSelected} itemsSelected={itemsSelected} removeItem={() => setItemRemoved(!itemRemoved)}/>
                    })
                }
        </div>
    );
}

export default SearchBar;