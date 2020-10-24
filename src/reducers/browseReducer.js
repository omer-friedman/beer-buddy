import * as actions from "../actions/actionTypes";

export const browseReducer = (state = {}, action) => {
  if (action.type === actions.PAGE_CHANGED) {
    return {
      ...state,
      currentPage: action.payload.pageNum
    };
  }
  return state;
};