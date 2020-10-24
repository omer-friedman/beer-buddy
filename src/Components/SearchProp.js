import React from 'react';
import { useDispatch } from 'react-redux';
import { searchRemoved } from '../actions/searchActions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PropBar, RemoveProp } from './styled/SearchPropSC';

const SearchProp = (props) => {
    const { searchKey, searchVal } = props
    const dispatch = useDispatch();

    const visualPropKey = (srchKey) =>{
        let visualKey = '';
        switch(srchKey){
            case 'food':      visualKey = 'food pairing - '; break;
            case 'beer_name': visualKey = 'beer name - ';    break;
            case 'abv_gt':    visualKey = '% >';             break;
            case 'ibu_gt':    visualKey = 'IBU >';           break;
            case 'ebc_gt':    visualKey = 'EBC >';           break;
            default: return '';
        }
        return visualKey;
    }

    return (
        <PropBar>
            <span>{visualPropKey(searchKey)} {searchVal}</span>
            <RemoveProp icon={faTimes} onClick={() => dispatch(searchRemoved(searchKey))} />
        </PropBar>
    );
};

export default SearchProp;