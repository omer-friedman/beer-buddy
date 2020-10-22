import React from 'react'
import LoaderSC from './Styled/LoaderSC'
import Spinner from './Styled/Spinner'
import { Mask } from './Styled/BeerCardSC'


function Loader(){
    return (
        <Mask>
            <LoaderSC>
                <Spinner />
            </LoaderSC>
        </Mask>
    )
}

export default Loader