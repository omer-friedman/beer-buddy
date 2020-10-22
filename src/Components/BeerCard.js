import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import BeerProp from './BeerProp'
import BottleImg from './BottleImg.js'
import {useTransition, animated} from 'react-spring'
import ExpandButton from './ExpandButton';
import LikeButton from './LikeButton'
import BeerRank from './BeerRank'
import { CardBox, BeerHeader, Description, RowContainer, ExpadDescription, Mask, LargeCard } from './Styled/BeerCardSC'

const BeerCard = (props) =>{
    const {product} = props
    const [isExpand, setExpand] = useState(false)
    const [rank, setRank] = useState(product.rank)
    const isFavorite = product.isFavorite
    const isLarge = props.isLarge
    const abv_desc = "The alcohol percentage is a figure that we are all very familiar with. Most beers have an alcohol percentage of between 5% and 10%. On the labels, the percentage is often referred to as alc. 5% vol. We also talk of percentage by volume. This means, half a litre of beer with 5% alcohol in volume contains 25 millilitres of alcohol. The alcohol percentage can also be referred to as a percentage of the weight. Because alcohol is lighter than water, the percentage by weight is lower than the percentage by volume. "
    const ibu_desc = "You can also measure the bitterness of a beer. In most cases this is measured in IBUs. IBU stands for International Bitterness Unit. The bitterness in beer can come from a variety of different sources, such as herbs or roasted malt. IBUs only show the bitterness of the hops, derived from the alpha acids they contain. These alpha acids can be measured; each milligram of alpha acid per litre of beer is an IBU point."
    const ebc_desc = "The colour of beer is measured in EBCs. EBC stands for European Brewery Convention. One EBC corresponds to 1 ml of iodine in 100 ml of water. There are also other methods used to indicate the colour of beer. For example, a similar scale is used in the United States, the so-called SRM scale."
    const [isDescExp, setDescExp] = useState(false)
    let expIcon = isDescExp? faAngleUp : faAngleDown;
    let shouldExpend = product.description.length > 200 && isLarge
    let routePath = useLocation().pathname;
    
    const maskTransitions = useTransition(isExpand, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const largeCardTransition = useTransition(isExpand, null, {
        from: { opacity: 0, transform: 'translateX(100%) translateY(30%)' },
        enter: { opacity: 1, transform: 'translateX(40%) translateY(30%)' },
        leave: { opacity: 0, transform: 'translateX(100%) translateY(30%)' },
    })

    useEffect(()=>{
        if(isFavorite && !isLarge){
            props.toggleFavorite({...product, rank: rank})
        }
    }, [rank])


    return (
        <>
            <CardBox islarge={isLarge}>
                <BeerHeader>{product.name}</BeerHeader>
                <RowContainer>
                    <BottleImg url={product.image_url}/>
                    <Description isdescexp={isDescExp}>{product.description}</Description>
                </RowContainer>
                <RowContainer justify_conent="space-evenly">
                    <BeerProp icon={"%"} val={product.abv} description={abv_desc}/>
                    <BeerProp icon={"IBU"} val={product.ibu} description={ibu_desc}/>
                    <BeerProp icon={"EBC"} val={product.ebc} description={ebc_desc}/>
                </RowContainer>
                {!isLarge && 
                    <RowContainer>
                        <LikeButton isFavorite={isFavorite} toggleFavorite={() => props.toggleFavorite({...product, isFavorite: !isFavorite})} />
                        <ExpandButton expandBtnClicked={() => setExpand(!isExpand)} />
                        {
                            routePath == '/favorites' &&
                            <BeerRank rank={rank} handleRankChanged={setRank}/>
                        }   
                    </RowContainer>
                }
                {
                    shouldExpend && 
                    <ExpadDescription onClick={() => setDescExp(!isDescExp)}>
                        <FontAwesomeIcon icon={expIcon} />
                    </ExpadDescription>
                }
            </CardBox>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <Mask as={animated.div} key={key} style={props}onClick={() => setExpand(false)} />
                )
            }
            {
                largeCardTransition.map(({ item, key, props }) =>
                    item && 
                    <LargeCard as={animated.div} key={key} style={props}>
                        <BeerCard isLarge={true} product = {product} />
                    </LargeCard>
                )
            }
        </>
    )
}

export default BeerCard