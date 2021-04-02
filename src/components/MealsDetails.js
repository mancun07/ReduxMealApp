import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams, Link} from 'react-router-dom'
import Button from './Button'
import {motion} from 'framer-motion'
import {getSingleMeal} from '../actions/MealActions'


const MealsDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const current = useSelector(state => state.meal.current)

    useEffect(() => {
        dispatch(getSingleMeal(id))
           // eslint-disable-next-line
    }, [])


    const initCont = {
        hidden: {opacity: 0},
        visible: {opacity: 1,
        transition: {duration: 2}
        }
    }




    return (
        <div className="detailed-meal-wrapper my-5">
            <Link to={'/'}><Button className="btn" text={'Back to search results'}/></Link>
            {current && (
            <div className="detailed-meal">
                <h2>{current.strMeal}</h2> 
                <motion.img src={current.strMealThumb} alt="single meal"
                initial={{x:'100vw'}}
                animate={{x:0, boxShadow:'0px 0px 8px rgb(255,255,255)'}}
                transition={{duration: 0.5, type:'spring', stiffness:'150'}}
                whileHover={{scale:1.05}}
                />
                <motion.div className="category"
                variants={initCont}
                initial="hidden"
                animate="visible"
                >
                    <span className="category__item btn">{current.strCategory}</span>
                    <span className="category__item btn">{current.strArea}</span>
                </motion.div>  
                <div className="instructions">
                    <p>{current.strInstructions}</p>
                </div>
            </div>
            )}

        </div>
    )
}

export default MealsDetails
