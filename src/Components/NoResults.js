import React from 'react'
import { Link } from 'react-router-dom';
import spilled_bear from '../Media/spilled_bear.png'

function NoResults(props) {
    return (
        <>
        <div className="flex flex-row justify-center">
            <img alt="not-found" src={spilled_bear} className="not_found_img"/>
            <Link to="/" onClick={props.noResults}>
                <div className="noResultsBox">
                    <span className="font-bold mb-5 underline">{props.message}</span>
                    <span>Click To Browse</span>
                    <span>Some Beers</span>
                </div>
            </Link>
        </div>
            
        </>
    );
}

export default NoResults;