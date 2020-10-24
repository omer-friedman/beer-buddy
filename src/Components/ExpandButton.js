import React from 'react';
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import Icon from './styled/Icon'

const ExpandButton = (props) => {
    return (
            <Icon icon={faExpand} onClick={props.expandBtnClicked}/>
    );
}

export default ExpandButton;