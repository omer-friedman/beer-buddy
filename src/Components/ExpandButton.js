import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import Icon from './Styled/Icon'

function ExpandButton(props) {
    return (
        <Icon>
            <FontAwesomeIcon icon={faExpand} onClick={props.expandBtnClicked}/>
        </Icon>
    );
}

export default ExpandButton;