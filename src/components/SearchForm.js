import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getMeals } from '../actions/MealActions'
import { setAlert } from '../actions/AlertActions'



const SearchForm = () => {
    const [food, setFood] = useState('');
    const userInput = useRef('');
    const dispatch = useDispatch();

    useEffect(() => {
        userInput.current.focus();
    }, [])



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
        <>
        <h2 style={{textAlign: 'center'}}>Input a product name</h2>
        <form className="search-form my-3" onSubmit={onSubmit}>
            <input ref={userInput} value={food} onChange={e => 
                setFood(e.target.value)} type="text"/>
            <button>Submit</button>
        </form>
        </>
    )
}

export default SearchForm
