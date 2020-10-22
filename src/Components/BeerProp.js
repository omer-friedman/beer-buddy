import React from 'react';
import BeerPropSC from './Styled/BeerPropSC'

function BeerProp(props) {

    return (
        <BeerPropSC data-tooltip={props.description}>
            <span>{props.val}</span>
            {props.icon}
        </BeerPropSC>
    );
}

export default BeerProp;