import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import BeerProp from './BeerProp'
import BottleImg from './BottleImg.js'
import {useTransition, animated} from 'react-spring'
import ExpandButton from './ExpandButton';
import LikeButton from './LikeButton'

const BeerCard = (props) =>{
    const [isExpand, setExpand] = useState(false)
    const [isFavorite, setFavorite] = useState(props.isFavorite)
    const {product} = props
    const isLarge = props.isLarge
    const abv_desc = "The alcohol percentage is a figure that we are all very familiar with. Most beers have an alcohol percentage of between 5% and 10%. On the labels, the percentage is often referred to as alc. 5% vol. We also talk of percentage by volume. This means, half a litre of beer with 5% alcohol in volume contains 25 millilitres of alcohol. The alcohol percentage can also be referred to as a percentage of the weight. Because alcohol is lighter than water, the percentage by weight is lower than the percentage by volume. "
    const ibu_desc = "You can also measure the bitterness of a beer. In most cases this is measured in IBUs. IBU stands for International Bitterness Unit. The bitterness in beer can come from a variety of different sources, such as herbs or roasted malt. IBUs only show the bitterness of the hops, derived from the alpha acids they contain. These alpha acids can be measured; each milligram of alpha acid per litre of beer is an IBU point."
    const ebc_desc = "The colour of beer is measured in EBCs. EBC stands for European Brewery Convention. One EBC corresponds to 1 ml of iodine in 100 ml of water. There are also other methods used to indicate the colour of beer. For example, a similar scale is used in the United States, the so-called SRM scale."
    const [isDescExp, setDescExp] = useState(false)
    let expIcon = isDescExp? faAngleUp : faAngleDown;
    let shouldExpend = product.description.length > 200 && isLarge

    const maskTransitions = useTransition(isExpand, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const cardTransitions = useTransition(isExpand, null, {
        from: { opacity: 0, transform: 'translateX(100%) translateY(30%)' },
        enter: { opacity: 1, transform: 'translateX(40%) translateY(30%)' },
        leave: { opacity: 0, transform: 'translateX(100%) translateY(30%)' },
    })

    return (
        <>
            <div className={`${isLarge? `lg-box` : `box`}`}>
                <span className="uppercase whitespace-no-wrap overflow-hidden w-full text-center border-b-2">{product.name}</span>
                <div className="flex flex-row items-center">
                    <BottleImg url={product.image_url}/>
                    <div className={`itemDescription ${isDescExp? 'expandedDecription' : ''}`}>{product.description}</div>
                </div>
                <div className="flex flex-row w-full justify-evenly">
                    <BeerProp icon={"%"} val={product.abv} description={abv_desc}/>
                    <BeerProp icon={"IBU"} val={product.ibu} description={ibu_desc}/>
                    <BeerProp icon={"EBC"} val={product.attenuation_level} description={ebc_desc}/>
                </div>
                {
                    !isLarge && 
                    <div className="flex flex-row w-full">
                        <LikeButton isFavorite={isFavorite} toggleFavorite={() => {props.toggleFavorite(product, !isFavorite); setFavorite(!isFavorite)}}/>
                        <ExpandButton expandBtnClicked={() => setExpand(!isExpand)} />
                    </div>
                }
                {
                    shouldExpend && 
                    <div className="flex justify-center text-gray-600 cursor-pointer" onClick={() => setDescExp(!isDescExp)}>
                        <FontAwesomeIcon icon={expIcon} />
                    </div>
                }
            </div>
            {
                maskTransitions.map(({ item, key, props }) =>
                        item && 
                        <animated.div 
                            key={key} 
                            style={props}
                            className="bg-black-t-50 fixed top-0 left-0 w-screen h-screen z-50"
                            onClick={() => setExpand(false)}
                        >
                        </animated.div>
                    )
            }
            {
                cardTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed top-0 left-30p z-50"
                >
                    <BeerCard isLarge={true}
                        product = {product}
                    />
                </animated.div>
            )
            }
        </>
    )
}

export default BeerCard