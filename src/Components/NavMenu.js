import React from 'react';
import { MenuHeader, LinkSC, ListItem } from './styled/NavMenuSC';

const NavMenu = (props) => {
    return (
        <>
            <MenuHeader>BeerBuddy</MenuHeader>
            <ul>
                <ListItem>
                    <LinkSC to="/" onClick={props.closeMenu}>
                        Browse Beers
                    </LinkSC>
                </ListItem>
                <ListItem>
                    <LinkSC to="/favorites" onClick={props.closeMenu}>
                        My Favorites
                    </LinkSC>
                </ListItem>
            </ul>
        </>
    )
};

export default NavMenu