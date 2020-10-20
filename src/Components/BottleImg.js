import React from 'react';
import beer from '../Media/beer.png'


function BottleImg(props) {
    const {url} = props
    const displayImg = url != null && !url.endsWith('keg.png');
    const img = displayImg?
    <img alt="beerImg" src={url} className="bottleImg"/>:
    <img alt="beerImg" src={beer} className="bottleImg"/>

    return (
        <>
            {img}
        </>
    );
}

export default BottleImg;