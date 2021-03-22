import { combineReducers } from 'redux';
import AlertReducer from './AlertReducer';
import MealReducer from './MealReducer'
import NavbarReducer from './NavbarReducer'


export default combineReducers({
    meal: MealReducer,
    navbar: NavbarReducer,
    alert: AlertReducer
  })


  