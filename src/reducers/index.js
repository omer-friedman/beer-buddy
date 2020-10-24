import { combineReducers } from 'redux';
import { browseReducer } from './browseReducer'
import { searchReducer } from './searchReducer'
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers({
    browseReducer,
    searchReducer,
    favoritesReducer
});

export default rootReducer;