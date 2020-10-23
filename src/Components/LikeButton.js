import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Icon from './Styled/Icon'


function LikeButton(props) {

    return (
        <Icon icon={faHeart} isfavorite={props.isFavorite} onClick={() => {props.toggleFavorite.call()}} />
    );
}

export default LikeButton;