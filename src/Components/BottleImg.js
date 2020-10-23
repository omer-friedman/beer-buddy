import React from 'react';
import beer from '../Media/beer.png'
import BottleImgSC from './Styled/BottleImgSC'


function BottleImg(props) {
    const {url} = props
    const displayOriginalBottle = url != null && !url.endsWith('keg.png');

    return <BottleImgSC src={displayOriginalBottle? url : beer} />;
}

export default BottleImg;