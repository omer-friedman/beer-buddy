import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components'
import Theme from './Components/Styled/Theme'
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Favorites from './Views/Favorites'
import BrowseBeers from './Views/BrowseBeers'
import Body from './Components/Styled/Body'


function App() {
  const [favorites, setFavorites] = useState({})
  const [goToBaseUrl, setGoToBaseUrl] = useState(false)

  const toggleFavorite = (product) =>{
    if(product.isFavorite)
      setFavorites({...favorites,[product.id]: product})
    else if(product.id in favorites){
      delete favorites[product.id]
      setFavorites(Object.assign({}, favorites))
    }
  }
  
  return (
    <>
    <ThemeProvider theme={Theme}>
      <Header />
      <Body>
        <Router >
          <Navigation /> 
          <Switch>
            <Route exact path="/">
              <BrowseBeers favorites={favorites} toggleFavorite={toggleFavorite} gotToBaseUrl={goToBaseUrl}/>
            </Route>
            <Route path="/favorites">
              <Favorites favorites={favorites} toggleFavorite={toggleFavorite} goToBaseUrl={() => setGoToBaseUrl(true)}/>
            </Route>
          </Switch>
        </Router>
      </Body>
    </ThemeProvider>
    </>
  );
}

export default App;
