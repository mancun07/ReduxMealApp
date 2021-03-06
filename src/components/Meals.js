import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {getMeals, clearResults} from '../actions/MealActions'
import Button from './Button';
import MealsItem from './MealsItem';
import {clearResults} from '../actions/MealActions'


const Meals = () => {

    const products = useSelector(state => state.meal.products)
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(clearResults())
    }

  
    return (
        <div className="meal-list-wrapper">
        {products && products.length > 0 && <Button className="btn" text={'Очистить результаты поиска'} onClick={onClick} style={style}/>}
        {!products && <h2>По вашему запросу ничего не найдено. Попробуйте изменить запрос...</h2>}
        <ul className="meals-list">
            {products && products.map(el => {
                return <MealsItem key={el.idMeal} el={el}/>
            })}
        </ul>
        </div>
    )
}

const style = {
    borderRadius: '10px', 
    textAlign: 'center', 
    display: 'block', 
    margin: '50px auto',
    border: 'none'
}

export default Meals
