import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function BeerRank(props) {
    const rankValues = [1,2,3,4,5];

    const handleChage = (e) =>{
        props.handleRankChanged(e.target.value)
    }

    return (
        <>
            <div className="rank">
                <select value={props.rank} onChange={handleChage}>
                    <option value=''></option>
                    {
                        rankValues.map((key,val) => <option key={val} value={key}>{key}</option>)
                    }
                </select>
            </div>
            <div className="likeIcon">
                <FontAwesomeIcon icon={faStar} className={`${props.rank>0? 'text-yellow-400' : ''}`}/>
            </div>
        </>
    );
}

export default BeerRank;