import {ActionTypes as types} from '../constants'

var defaultValue = {
    originAmount: '0.00',
    originCurrency: 'USD',
    conversionRate: 1.5,
    destinationAmount: '0.00',
    destinationCurrency: 'EUR',
    feeAmount: 0.00,
    totalCost: 0.00
};

function amount(state = defaultValue, action) {
    switch(action.type) {
        case types.CHANGE_ORIGIN_AMOUNT:
            return Object.assign({}, state, {originAmount: action.data.newAmount})
        case types.CHANGE_DEST_AMOUNT:
            return Object.assign({}, state, {destinationAmount: action.data.newAmount})
        case types.RECEIVED_CONVERSION_RATE_SUCCESS:
        return Object.assign({}, state, {
            conversionRate: action.data.xRate,
            originAmount: action.data.originAmount,
            destinationAmount: action.data.destAmount
        })
        case types.RECEIVED_FEES_SUCCESS:
            const newFeeAmount = action.data.feeAmount
            const newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);

            return Object.assign({}, state, {
                feeAmount: newFeeAmount,
                totalCost: newTotal
            })
        case types.CHANGE_ORIGIN_CURRENCY:
            return Object.assign({}, state, {originCurrency: action.data.newCurrency})
        case types.CHANGE_DEST_CURRENCY:
            return Object.assign({}, state, {destinationCurrency: action.data.newCurrency})
        default:
            return state
    }
}

export default amount;