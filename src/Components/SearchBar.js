import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import SearchSelect from './SearchSelect'
import SearchProp from './SearchProp'
import StyledIconSearch from './Styled/StyledIconSearch'
import SearchBarSC from './Styled/SearchBarSC'
import SearchInput from './Styled/SearchInput'


function SearchBar(props) {
    const [showSearch, setShowSearch] = [props.showSearch, props.setShowSearch]
    const [itemsSelected, setItemsSelected] = [props.itemsSelected, props.setItemsSelected]
    const [selectedKey, setKey] = useState('food')
    const [itemRemoved, setItemRemoved] = useState(false)
    const inpRef = React.createRef();

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

    const handleKeyPress = (e) =>{
        if(e.key === 'Enter')
            searchClickHandler.call()
    }

    return ( 
        <SearchBarSC>  
            {showSearch&& <SearchSelect handleChange={searchSelectedHandler}/>}
            <SearchInput ref={inpRef} showsearch={showSearch} onKeyPress={(e) => handleKeyPress(e)} />
            <StyledIconSearch icon={faSearch} onClick={searchClickHandler}/>
            <FontAwesomeIcon icon={showSearch? faAngleLeft: faAngleRight} onClick={() => setShowSearch(!showSearch)}/>
            {
                Object.entries(itemsSelected).map(([key,val]) => {
                    return <SearchProp key={key} searchKey={key} searchVal={val} setItemsSelected={setItemsSelected} itemsSelected={itemsSelected} removeItem={() => setItemRemoved(!itemRemoved)}/>
                })
            } 
        </SearchBarSC>
    );
}

export default SearchBar;