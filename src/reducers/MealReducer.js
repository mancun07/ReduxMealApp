import {SET_LOADING, GET_MEALS, GET_SINGLE_MEAL, CLEAR_RESULTS} from '../actions/types'

const initialState = {
    products: [],
    current: null,
    loading: false
}


function MealReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MEALS: 
        return {
          ...state,
          products: action.payload,
          loading: false
        }

      case CLEAR_RESULTS:
        return {
          ...state,
          products: []
        }

    case GET_SINGLE_MEAL:
        return {
          ...state,
          current: action.payload,
          loading: false
        }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

        default: 
        return state
    }
  }

  export default MealReducer;