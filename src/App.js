import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import Theme from './components/styled/Theme';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Favorites from './views/Favorites';
import BrowseBeers from './views/BrowseBeers';
import Body from './components/styled/Body';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Header />
        <Body>
          <Router >
            <Navigation /> 
            <Switch>
              <Route exact path="/">
                <BrowseBeers />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
            </Switch>
          </Router>
        </Body>
      </ThemeProvider>
    </ Provider>
  );
}

export default App;
