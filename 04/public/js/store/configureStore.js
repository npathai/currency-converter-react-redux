import {createStore} from "redux";

var defaultValue = {
    originAmount: '0.00'
};

function amount(state = defaultValue, action) {
    console.log(state)
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return Object.assign({}, state, {originAmount: action.data.newAmount})
    }
    return state
}

var store = createStore(amount);

export default store