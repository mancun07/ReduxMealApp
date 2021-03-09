import {SET_ALERT, CLEAR_ALERT} from './types'

export const setAlert = (text) => dispatch => {

    dispatch({type: SET_ALERT, payload: text})
    setTimeout(() => {
        dispatch({type: CLEAR_ALERT})
    }, 3000)
}


