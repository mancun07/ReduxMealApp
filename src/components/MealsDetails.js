import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams, Link} from 'react-router-dom'
import {getSingleMeal} from '../actions/MealActions'
import Button from './Button'
import {motion} from 'framer-motion'

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
                <motion.img src={current.strMealThumb} alt="single meal"
                initial={{x:'100vw'}}
                animate={{x:0, boxShadow:'0px 0px 8px rgb(255,255,255)'}}
                transition={{duration: 0.5, type:'spring', stiffness:'150'}}
                whileHover={{scale:1.05}}
                />
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
