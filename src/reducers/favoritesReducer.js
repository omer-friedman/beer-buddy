import * as actions from "../actions/actionTypes";

export const favoritesReducer = (state = {}, action) =>{
    switch(action.type){
        case actions.FAVORITE_ADDED:
            return {
                ...state,
                favorites:{
                    ...state.favorites,
                    [action.payload.id]: {
                         rank: 0
                    }
                }
               
            };
        case actions.FAVORITE_REMOVED:
            let {[action.payload.id] : omit, ...res} = state.favorites;
            return{
                ...state,
                favorites: res
            }
        case actions.RANK_CHANGED:
            return {
                ...state,
                favorites:{
                    ...state.favorites,
                    [action.payload.id]: {
                            rank: action.payload.rank
                    }
                }
            };
        default: return state;
    }
};