import * as actions from './actionTypes'

export const searchExpandToggled = (isExpended) => {
    return {
        type: actions.SEARCH_EXPAND_TOGGLED,
        payload: {
            isExpended
        }
    }
}

export const searchAdded = (searchKey, searchVal) => {
    return {
        type: actions.SEARCH_FILTER_ADDED,
        payload: {
            filterKey: searchKey,
            filterVal: searchVal
        }
    }
}

export const searchRemoved = (filterKey) => {
    return {
        type: actions.SEARCH_FILTER_REMOVED,
        payload: {
            filterKey
        }
    }
}

export const removeAllProps = () => {
    return {
        type: actions.SEARCH_ALL_FILTERS_REMOVED,
        payload: {}
    }
}