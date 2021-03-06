import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getMeals } from '../actions/MealActions'
import { setAlert } from '../actions/AlertActions'



const SearchForm = () => {
    const [food, setFood] = useState('');

    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault();
        if (!food) {
            dispatch(setAlert('Please, fill in the field...'));
        } else {
            dispatch(getMeals(food));
            setFood('');
        }
    }

    return (
        <form className="search-form my-5" onSubmit={onSubmit}>
            <input value={food} onChange={e => setFood(e.target.value)} type="text"/>
            <button>Отправить</button>
        </form>
    )
}

export default SearchForm
