import React from 'react';
import SearchSelectSC from './Styled/SearchSelectSC'

function SearchSelect(props) {
    
    const searchItems = {
        'food pairing': 'food',
        'beer name': 'beer_name',
        'minimum abv' : 'abv_gt',
        'minimum ibu' : 'ibu_gt',
        'minimum ebc' : 'ebc_gt'
    }

    const handleChange = (e) =>{
        props.handleChange(e.target.value)
    }

    return (
        <>
            <SearchSelectSC onChange={handleChange}>
                {
                   Object.entries(searchItems).map(([key,val]) => {
                        return <option value={val} key={key}>{key}</option>
                    })
                }
            </SearchSelectSC>
        </>
    )
}

export default SearchSelect;