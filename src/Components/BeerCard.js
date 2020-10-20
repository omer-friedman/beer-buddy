import React, {useState} from 'react'
import BeerProp from './BeerProp'
import BottleImg from './BottleImg.js'
import {useTransition, animated} from 'react-spring'
import ExpandButton from './ExpandButton';
import LikeButton from './LikeButton'
import LargeBeerCard from './LargeBeerCard'


const BeerCard = (props) =>{
    const [isExpand, setExpand] = useState(false)
    const [isFavorite, setFavorite] = useState(props.isFavorite)
    const {product} = props

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
            <div className="box w-64 flex flex-col items-center text-black shadow-lg">
            <span className="uppercase whitespace-no-wrap overflow-hidden w-full text-center border-b-2">{product.name}</span>
                <div className="flex flex-row items-center">
                    <BottleImg url={product.image_url}/>
                    <div className="itemDescription">{product.description}</div>
                </div>
                <div className="flex flex-row w-full justify-evenly">
                    <BeerProp icon={"%"} val={product.abv} description="Alcohol by volume, or ABV, is used to measure the alcohol content of beer"/>
                    <BeerProp icon={"IBU"} val={product.ibu} description="The International Bittering Units scale, or simply IBU scale, is used to approximately quantify the bitterness of beer."/>
                    <BeerProp icon={"AL"} val={product.attenuation_level} description="In brewing, attenuation level refers to the conversion of sugars into alcohol and carbon dioxide by the fermentation process; the greater the attenuation, the more sugar has been converted into alcohol."/>
                </div>
                    <div className="flex flex-row w-full">
                    <LikeButton isFavorite={isFavorite} toggleFavorite={() => {props.toggleFavorite(product, !isFavorite); setFavorite(!isFavorite)}}/>
                    <ExpandButton expandBtnClicked={() => setExpand(!isExpand)} />
                </div>
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
                    <LargeBeerCard
                        product = {product}
                    />
                </animated.div>
            )
            }
        </>
    )
}

export default BeerCard