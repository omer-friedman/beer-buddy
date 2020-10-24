import React from 'react';
import LoaderSC from './styled/LoaderSC';
import Spinner from './styled/Spinner';
import { Mask } from './styled/BeerCardSC';


const Loader = () => {
    return (
        <Mask>
            <LoaderSC>
                <Spinner />
            </LoaderSC>
        </Mask>
    )
};

export default Loader