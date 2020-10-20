import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function LikeButton(props) {

    return (
        <div className={`likeIcon ${props.isFavorite? 'favorite animate-pulse-once' : ''}`} onClick={() => {props.toggleFavorite.call()}}>
            <FontAwesomeIcon icon={faHeart}/>
        </div>
    );
}

export default LikeButton;