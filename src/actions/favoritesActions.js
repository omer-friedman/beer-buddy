import * as actions from './actionTypes'

export const favoriteAdded = (id) =>{
    return {
        type: actions.FAVORITE_ADDED,
        payload: {
            id
        }
    }
}

export const favoriteRemoved = (id) =>{
    return{
        type: actions.FAVORITE_REMOVED,
        payload:{
            id
        }
    }
}

export const rankChanged = (id, rank) =>{
    return{
        type: actions.RANK_CHANGED,
        payload:{
            id,
            rank
        }
    }
}