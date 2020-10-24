import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteAdded, favoriteRemoved } from '../actions/favoritesActions';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Icon from './styled/Icon';

const LikeButton = (props) => {
    const favorites = useSelector(state => state.favoritesReducer.favorites)
    const isFavorite = (favorites ? (props.id in favorites ? 1 : 0) : 0)
    const dispatch = useDispatch();

    const toggleFavlorite = () => {
        dispatch(isFavorite ? favoriteRemoved(props.id) : favoriteAdded(props.id))
    }

    return (
        <Icon icon={faHeart} isfavorite={isFavorite} onClick={() => toggleFavlorite()} />
    );
};

export default LikeButton;