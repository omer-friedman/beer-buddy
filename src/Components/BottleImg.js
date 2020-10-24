import React from 'react';
import beer from '../media/beer.png'
import BottleImgSC from './styled/BottleImgSC'


const BottleImg = (props) => {
    const { url } = props
    const displayOriginalBottle = url != null && !url.endsWith('keg.png');
    return <BottleImgSC src={displayOriginalBottle ? url : beer} />;
}

export default BottleImg;