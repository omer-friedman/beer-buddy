import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { PropBar, RemoveProp } from './Styled/SearchPropSC'

function SearchProp(props) {
    const [searchKey, searchVal] = [props.searchKey, props.searchVal]
    const [itemsSelected, setItemsSelected, removeItem] = [props.itemsSelected, props.setItemsSelected, props.removeItem]
    let visualKey = ''

    const searchItems = {
        'food pairing': 'food',
        'beer name': 'beer_name',
        'minimum abv' : 'abv_gt',
        'minimum ibu' : 'ibu_gt',
        'minimum ebc' : 'ebc_gt'
    }

    const visualPropKey = (srchKey) =>{
        let visualKey = '';
        switch(srchKey){
            case 'food':      visualKey = 'food pairing - '; break;
            case 'beer_name': visualKey = 'beer name - ';    break;
            case 'abv_gt':    visualKey = '% >';             break;
            case 'ibu_gt':    visualKey = 'IBU >';           break;
            case 'ebc_gt':    visualKey = 'EBC >';           break;
        }
        return visualKey;
    }

    return (
        <PropBar>
            <span>{visualPropKey(searchKey)} {searchVal}</span>
            <RemoveProp icon={faTimes} onClick={()=>{
                removeItem.call()
                delete itemsSelected[searchKey]
                setItemsSelected(Object.assign({}, itemsSelected))
                }}
            />
        </PropBar>
    );
}

export default SearchProp;