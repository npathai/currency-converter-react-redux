import keyMirror from 'keymirror';

export const ActionTypes = keyMirror({
    CHANGE_ORIGIN_AMOUNT: null,
    CHANGE_ORIGIN_CURRENCY: null,
    CHANGE_DEST_CURRENCY: null,
    CHANGE_DEST_AMOUNT: null,
    REQUEST_CONVERSION_RATE: null,
    RECEIVED_CONVERSION_RATE_SUCCESS: null,
    REQUEST_FEES: null,
    RECEIVED_FEES_SUCCESS: null,

    RECEIVED_CONVERSION_RATE_FAILURE: null,
    RECEIVED_FEES_FAILURE: null,
    RECEIVED_AJAX_CALL_FAILURE: null
})