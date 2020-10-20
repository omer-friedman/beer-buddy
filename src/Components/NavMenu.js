import React from 'react'
import { Link } from "react-router-dom"

function NavMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                BeerBuddy
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Browse Beers
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/favorites" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        My Favorites
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu