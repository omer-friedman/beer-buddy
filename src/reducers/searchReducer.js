import * as actions from "../actions/actionTypes";

export const searchReducer = (state = {}, action) => {
    switch(action.type){

        case actions.SEARCH_EXPAND_TOGGLED:
            return {
                ...state,
                expanded: action.payload.isExpended
            };

        case actions.SEARCH_FILTER_ADDED:
            return{
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.filterKey]: action.payload.filterVal
                }
            }
        
            case actions.SEARCH_FILTER_REMOVED:
                let {[action.payload.filterKey] : omit, ...res} = state.filters;
                return{
                    ...state,
                    filters: res
                }
            
            case actions.SEARCH_ALL_FILTERS_REMOVED:
            return{
                ...state,
                filters: {}
            }

        default: return state;
    }
};