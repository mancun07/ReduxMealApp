
import { useDispatch } from 'react-redux';


const Button = ({text, style}) => {
    const dispatch = useDispatch();

    return (
        <button className="btn" style={style}>{text}</button>
    )
}

export default Button
