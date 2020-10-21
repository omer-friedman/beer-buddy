import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Favorites from './Views/Favorites'
import BrowseBeers from './Views/BrowseBeers'


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
      <Header />
      <div className="h-screen p-10">
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
      </div>
    </>
  );
}

export default App;
