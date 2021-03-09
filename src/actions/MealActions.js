import {SET_LOADING, GET_MEALS, GET_SINGLE_MEAL, CLEAR_RESULTS} from './types'



export const getMeals = (name) => async dispatch => {
    try {
        dispatch({type: SET_LOADING})
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await res.json();
        dispatch({type: GET_MEALS, payload: data.meals})
    }

    catch (err) {
        console.log(err.message)
    }

}   

export const getSingleMeal = (id) => async dispatch => {
    try {
        dispatch({type: SET_LOADING})
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json();
        dispatch({type: GET_SINGLE_MEAL, payload: data.meals[0]})
    }

    catch (err) {
        console.log(err.message)
    }
}

export const clearResults = () => {
    return {
        type: CLEAR_RESULTS
    }
}




