import React from 'react';
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
  let favorites = {}

  const toggleFavorite = (product, isFavorite) =>{
    if(isFavorite)
      favorites[product.id] = product
    else if(product.id in favorites){
      delete favorites[product.id]
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
              <BrowseBeers favorites={favorites} toggleFavorite={toggleFavorite}/>
            </Route>
            <Route path="/favorites">
              <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
