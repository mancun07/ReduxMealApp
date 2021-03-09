import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


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

MealsItem.propTypes = {
    el: PropTypes.object
}

export default MealsItem
