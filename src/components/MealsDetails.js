import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams, Link} from 'react-router-dom'
import {getSingleMeal} from '../actions/MealActions'
import Button from './Button'

const MealsDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const current = useSelector(state => state.meal.current)

    useEffect(() => {
        dispatch(getSingleMeal(id))
    }, [])


    return (
        <div className="detailed-meal-wrapper my-5">
            <Link to={'/'}><Button className="btn" text={'Назад к результатам поиска'}/></Link>
            {current && (
            <div className="detailed-meal">
                <h2>{current.strMeal}</h2> 
                <img src={current.strMealThumb} alt="single meal"/>
                <div className="category my-3">
                    <span className="category__item btn">{current.strCategory}</span>
                    <span className="category__item btn">{current.strArea}</span>
                </div>  
                <div className="instructions">
                    <p>{current.strInstructions}</p>
                </div>
            </div>
            )}

        </div>
    )
}

export default MealsDetails
