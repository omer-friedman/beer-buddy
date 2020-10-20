import React from 'react'
import spilled_bear from '../Media/spilled_bear.png'

function NoResults(props) {
    return (
        <>
        <div className="flex flex-row justify-center">
            <img alt="not-found" src={spilled_bear} className="not_found_img"/>
            <div className="noResultsBox" onClick={props.noResults}>
                <span className="font-bold mb-5 underline">{props.message}</span>
                <span>Click To Browse</span>
                <span>Some Beers</span>
            </div>
        </div>
            
        </>
    );
}

export default NoResults;