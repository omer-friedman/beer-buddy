import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rankChanged } from '../actions/favoritesActions';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Rank } from './styled/BeerRankSC';
import Icon from './styled/Icon';
import RankIcon from './styled/RankIcon';

const BeerRank = (props) => {
    const rankValues = [1, 2, 3, 4, 5];
    const rank = useSelector(state => props.id in state.favoritesReducer.favorites ? state.favoritesReducer.favorites[props.id].rank : '')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(rankChanged(props.id, e.target.value))
    }

    return (
        <>
            <Rank>
                <select value={rank} onChange={handleChange}>
                    <option value=''></option>
                    {rankValues.map((key, val) => <option key={val} value={key}>{key}</option>)}
                </select>
            </Rank>
            <RankIcon>
                <Icon icon={faStar} isranked={rank > 0 ? 1 : 0} />
            </RankIcon>
        </>
    );
}

export default BeerRank;