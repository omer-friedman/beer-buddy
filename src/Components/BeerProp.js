import React from 'react';

function BeerProp(props) {

    return (
        <div className="flex flex-col items-center w-20" data-tooltip={props.description}>
            <span className="text-2xl pb-2" >{props.val}</span>
            <span className="text-2xl pb-2">{props.icon}</span>
        </div>
    );
}

export default BeerProp;