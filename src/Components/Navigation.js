import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavMenu from './NavMenu'
import { Mask } from './Styled/BeerCardSC'
import { BarsIcon, Menu } from './Styled/NavigationSC'
  

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <BarsIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
            { //Mask
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <Mask as={animated.div} key={key} style={props}onClick={() => setShowMenu(false)} />
                )
            }

            { //Menu
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <Menu as={animated.div} key={key} style={props} >
                        <NavMenu closeMenu={() => setShowMenu(false)}/>
                    </Menu>
                )
            }
        </nav>
    )
}

export default Navigation