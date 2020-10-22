import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Icon from './Styled/Icon'
import { StarIcon, Rank } from './Styled/BeerRankSC'

function BeerRank(props) {
    const rankValues = [1,2,3,4,5];

    const handleChage = (e) =>{
        props.handleRankChanged(e.target.value)
    }

    return (
        <>
            <Rank>
                <select value={props.rank} onChange={handleChage}>
                    <option value=''></option>
                    {rankValues.map((key,val) => <option key={val} value={key}>{key}</option>)}
                </select>
            </Rank>
            <Icon>
                <StarIcon icon={faStar} rank={props.rank}/>
            </Icon>
        </>
    );
}

export default BeerRank;