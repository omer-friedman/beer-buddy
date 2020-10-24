import * as actions from './actionTypes'

export const pageChanged = (pageNum) => {
    console.log("pageChanged")
    return {
        type: actions.PAGE_CHANGED,
        payload: {
            pageNum
        }
    }
}