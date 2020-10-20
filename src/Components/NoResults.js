import React from 'react'
import not_found from '../Media/not_found.png'

function NoResults(props) {
    return (
        <>
        <div className="flex flex-row justify-center">
            <div className="noResultsBox" onClick={props.noResults}>
                <span className="font-bold mb-5 underline">No Results</span>
                <span>Click To Browse</span>
                <span>Some Beers</span>
            </div>
            <img src={not_found} className="not_found_img"/>
        </div>
            
        </>
    );
}

export default NoResults;