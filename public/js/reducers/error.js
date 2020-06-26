import {ActionTypes as types} from '../constants'

const defaultState = {
    errorMessage: ''
}

function error(state = defaultState, action) {
    switch(action.type) {
        case types.RECEIVED_AJAX_CALL_FAILURE:
            return Object.assign({}, {errorMessage: action.data.errorMessage})
        case types.RECEIVED_FEES_SUCCESS:
            return Object.assign({}, {errorMessage: ''})
        default:
            return state
    }
}

export default error;