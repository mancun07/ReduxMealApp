
import {Link} from 'react-router-dom'


const MealsItem = ({el}) => {
    return (
        <Link to={`/products/${el.idMeal}`}>
        <li className="meal-item">
           <img src={el.strMealThumb} alt="meal"/>
            <p className="meal-item__title">{el.strMeal}</p>
        </li>
        </Link>
    )
}

export default MealsItem
