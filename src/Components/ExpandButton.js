import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'

function ExpandButton(props) {
    return (
        <div className="likeIcon">
            <FontAwesomeIcon icon={faExpand} onClick={props.expandBtnClicked}/>
        </div>
    );
}

export default ExpandButton;