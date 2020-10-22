import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Icon from './Styled/Icon'


function LikeButton(props) {

    return (
        <Icon isfavorite={props.isFavorite} onClick={() => {props.toggleFavorite.call()}}>
            <FontAwesomeIcon icon={faHeart}/>
        </Icon>
    );
}

export default LikeButton;