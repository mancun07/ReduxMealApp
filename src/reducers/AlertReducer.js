import {SET_ALERT, CLEAR_ALERT} from '../actions/types'

const initialState = {
    alert: null,
}


function AlertReducer(state = initialState, action) {
    switch (action.type) {

      case SET_ALERT: 
        return {
          ...state,
          alert: action.payload
        }

      case CLEAR_ALERT:
        return {
            ...state,
            alert: null
          }

        default: 
        return state
    }
  }

  export default AlertReducer;
