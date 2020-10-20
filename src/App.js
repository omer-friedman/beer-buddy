import React from 'react';
// import React, {useEffect, useState} from 'react';
// import { useAxiosGet } from './Hooks/HttpHelper'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import logo from './Media/logo1.png'
import Navigation from './Components/Navigation'
import Favorites from './Views/Favorites'
// import { buildUrl } from './Hooks/UrlHelper'
import BrowseBeers from './Views/BrowseBeers'


function App() {
  let favorites = {}

  const toggleFavorite = (product, isFavorite) =>{
    if(isFavorite)
      favorites[product.id] = product
    else if(product.id in favorites)
      delete favorites[product.id]
  }
  
  return (
    <>
      <header className="flex justify-center bg-black-t-50">
        <img className="logoImg" src={logo} alt="logo"/>
      </header>
      <div className="h-screen p-10">
        <Router >
          <Navigation /> 
          <Switch>
            <Route exact path="/">
              <BrowseBeers favorites={favorites} toggleFavorite={toggleFavorite}/>
            </Route>
            <Route path="/favorites">
              <Favorites favorites={favorites} toggleFavorite={toggleFavorite}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
