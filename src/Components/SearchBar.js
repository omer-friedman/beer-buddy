import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import SearchSelect from './SearchSelect';
import SearchProp from './SearchProp';
import StyledIconSearch from './styled/StyledIconSearch';
import SearchBarSC from './styled/SearchBarSC';
import SearchInput from './styled/SearchInput';
import { searchExpandToggled, searchAdded } from '../actions/searchActions';

const SearchBar = (props) => {
    const [selectedKey, setKey] = useState('food')
    const expanded = useSelector(state => state.searchReducer.expanded)
    const dispatch = useDispatch()
    const filters = useSelector(state => state.searchReducer.filters)
    const inpRef = React.createRef()

    useEffect(() => {
        if (expanded)
            inpRef.current.focus();
    }, [expanded, inpRef])

    const searchClickHandler = () => {
        const val_to_search = inpRef.current.value;
        if (expanded && val_to_search) {
            dispatch(searchAdded(selectedKey, val_to_search))
        }
    }

    const searchSelectedHandler = (value) => {
        inpRef.current.focus();
        setKey(value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            searchClickHandler.call()
    }

    return (
        <SearchBarSC>
            {expanded && <SearchSelect handleChange={searchSelectedHandler} />}
            {expanded && <SearchInput ref={inpRef} onKeyPress={(e) => handleKeyPress(e)} />}
            <StyledIconSearch icon={faSearch} onClick={searchClickHandler} />
            <FontAwesomeIcon icon={expanded ? faAngleLeft : faAngleRight} onClick={() => dispatch(searchExpandToggled(!expanded))} />
            {
                filters &&
                Object.entries(filters).map(([key, val]) => {
                    return <SearchProp key={key} searchKey={key} searchVal={val} />
                })
            }
        </SearchBarSC>
    );
};

export default SearchBar;