import React, {useState} from 'react'
import BeerProp from './BeerProp'
import BottleImg from './BottleImg.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';


function LargeBeerCard(props){
    const [isDescExp, setDescExp] = useState(false)
    const {product} = props  
    let expIcon = isDescExp? faAngleUp : faAngleDown;
    let shouldExpend = product.description.length > 200

    return (
        <>
            <div className="lg-box w-64 flex flex-col items-center text-black shadow-lg">
                <span className="uppercase whitespace-no-wrap overflow-hidden w-full text-center border-b-2">{product.name}</span>
                <div className="flex flex-row items-center">
                    <BottleImg url={product.image_url}/>
                    <div className={classNames({itemDescription:true, expandedDecription: isDescExp})}>{product.description}</div>
                </div>
                <div className="flex flex-row w-full justify-evenly">
                    <BeerProp icon={"%"} val={product.abv} description="Alcohol by volume, or ABV, is used to measure the alcohol content of beer"/>
                    <BeerProp icon={"IBU"} val={product.ibu} description="The International Bittering Units scale, or simply IBU scale, is used to approximately quantify the bitterness of beer."/>
                    <BeerProp icon={"AL"} val={product.attenuation_level} description="In brewing, attenuation level refers to the conversion of sugars into alcohol and carbon dioxide by the fermentation process; the greater the attenuation, the more sugar has been converted into alcohol."/>
                </div>
                {
                    shouldExpend && 
                    <div className="flex justify-center text-gray-600 cursor-pointer" onClick={() => setDescExp(!isDescExp)}>
                        <FontAwesomeIcon icon={expIcon} />
                    </div>
                }
            </div>
        </>
    )
}

export default LargeBeerCard