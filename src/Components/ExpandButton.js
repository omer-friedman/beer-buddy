import React from 'react';
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import Icon from './Styled/Icon'

function ExpandButton(props) {
    return (
            <Icon icon={faExpand} onClick={props.expandBtnClicked}/>
    );
}

export default ExpandButton;