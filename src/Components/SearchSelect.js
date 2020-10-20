import React from 'react';

function SearchSelect(props) {
    
    const searchItems = {
        'food pairing': 'food',
        'beer name': 'beer_name',
        'minimum abv' : 'abv_gt',
        'minimum ibu' : 'ibu_gt',
        'minimum ebc' : 'ebc_gt}'
    }

    const handleChange = (e) =>{
        console.log(e.target.value)
        props.handleChange(e.target.value)
    }
    

    return (
        <>
            <select className="uppercase mr-5" onChange={handleChange}>
                {
                   Object.entries(searchItems).map(([key,val]) => {
                        return <option value={val} key={key}>{key}</option>
                    })
                }
            </select>
        </>
    )
}

export default SearchSelect;