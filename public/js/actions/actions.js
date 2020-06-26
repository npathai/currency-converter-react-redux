import axios from "axios";
import debounce from 'lodash.debounce';
import {ActionTypes as types} from '../constants'


export function fetchConversionRateAndFees(payload) {
    return (dispatch) => {
        makeConversionAndFeesAjaxCall(payload, dispatch)
    }
}

function _makeConversionAndFeesAjaxCall(payload, dispatch) {
    dispatch({type: types.REQUEST_CONVERSION_RATE, data: payload})

    axios.get('/api/conversion', {
        params: payload
    })
        .then((resp) => {
            dispatch({type: types.RECEIVED_CONVERSION_RATE_SUCCESS, data: resp.data})
            const feePayload = Object.assign({}, payload, {originAmount: resp.data.originAmount})
            dispatch(fetchFees(feePayload))
        })
        .catch((err) => {
            dispatch({type: types.RECEIVED_CONVERSION_RATE_FAILURE, data: err})
        });
}

const makeConversionAndFeesAjaxCall = debounce(_makeConversionAndFeesAjaxCall, 300);

export function changeDestAmount(newAmount) {
    return {
        type: types.CHANGE_DEST_AMOUNT,
        data: {newAmount: newAmount}
    }
}


export function changeDestCurrency(newCurrency) {
    return {
        type: types.CHANGE_DEST_CURRENCY,
        data: {newCurrency: newCurrency}
    }
}


export function changeOriginCurrency(newCurrency) {
    return {
        type: types.CHANGE_ORIGIN_CURRENCY,
        data: {newCurrency: newCurrency}
    }
}

export function changeOriginAmount(newAmount) {
    return {
        type: types.CHANGE_ORIGIN_AMOUNT,
        data: {newAmount: newAmount}
    }
}

export function fetchConversionRate(payload) {
    return (dispatch) => {
        makeConversionAjaxCall(payload, dispatch)
    }
}

function _makeConversionAjaxCall(payload, dispatch) {
    dispatch({type: types.REQUEST_CONVERSION_RATE, data: payload})

    axios.get('/api/conversion', {
        params: payload
    })
        .then((resp) => {
            dispatch({type: types.RECEIVED_CONVERSION_RATE_SUCCESS, data: resp.data})
        })
        .catch((err) => {
            dispatch({type: types.RECEIVED_CONVERSION_RATE_FAILURE, data: err})
        });
}

const makeConversionAjaxCall = debounce(_makeConversionAjaxCall, 300);


export function fetchFees(payload) {
    return (dispatch) => {
        makeFeesAjaxCall(payload, dispatch)
    }
}

function _makeFeesAjaxCall(payload, dispatch) {
    dispatch({type: types.REQUEST_FEES, data: payload})

    axios.get('/api/fees', {
        params: payload
    })
        .then((resp) => {
            dispatch({type: types.RECEIVED_FEES_SUCCESS, data: resp.data})
        })
        .catch((resp) => {
            const errorMessage = getErrorMessage(resp)
            dispatch({type: types.RECEIVED_AJAX_CALL_FAILURE, data: {errorMessage: errorMessage, failedCall: 'fees'}})
        });
}

const makeFeesAjaxCall = debounce(_makeFeesAjaxCall, 300);


/*******************
 * HELPERS
 ******************/

// we'll handle all failures the same
function getErrorMessage(resp) {
    var msg = 'Error. Please try again later.'

    if (resp && resp.request && resp.request.status === 0) {
        msg = 'Oh no! App appears to be offline.'
    }

    return msg
}