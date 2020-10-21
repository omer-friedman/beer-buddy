import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchProp(props) {
    const [searchKey, searchVal] = [props.searchKey, props.searchVal]
    const [itemsSelected, setItemsSelected, removeItem] = [props.itemsSelected, props.setItemsSelected, props.removeItem]
    let visualKey = ''

    const searchItems = {
        'food pairing': 'food',
        'beer name': 'beer_name',
        'minimum abv' : 'abv_gt',
        'minimum ibu' : 'ibu_gt',
        'minimum ebc' : 'ebc_gt}'
    }
    const visualPropKey = (srchKey) =>{
        let visualKey = ''
        switch(searchKey){
            case 'food':
                visualKey = 'food pairing:';
                break;
            case 'beer_name':
                visualKey = 'beer name:';
                break;
            case 'abv_gt':
                visualKey = '% >';
                break;
            case 'ibu_gt':
                visualKey = 'IBU >';
                break;
            case 'ebc_gt':
                visualKey = 'EBC >';
                break;
        }
        return visualKey;
    }

    console.log("SearchProp: "+searchKey)
    return (
        <div className="search_prop">
            <span>{visualPropKey(searchKey)} {searchVal}</span>
            <FontAwesomeIcon icon={faTimes} className="ml-4 cursor-pointer" onClick={()=>{
                removeItem.call()
                delete itemsSelected[searchKey]
                setItemsSelected(Object.assign({}, itemsSelected))
                }}/>
        </div>
    );
}

export default SearchProp;