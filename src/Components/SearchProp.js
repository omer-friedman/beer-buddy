import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchProp(props) {
    const [searchKey, searchVal] = [props.searchKey, props.searchVal]
    const [itemsSelected, setItemsSelected, removeItem] = [props.itemsSelected, props.setItemsSelected, props.removeItem]
    console.log("SearchProp: "+searchKey)
    return (
        <div className="search_prop">
            <span>{searchKey} {searchVal}</span>
            <FontAwesomeIcon icon={faTimes} className="ml-4 cursor-pointer" onClick={()=>{
                removeItem.call()
                delete itemsSelected[searchKey]
                setItemsSelected(Object.assign({}, itemsSelected))
                }}/>
        </div>
    );
}

export default SearchProp;