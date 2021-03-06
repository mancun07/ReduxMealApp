
import { useDispatch } from 'react-redux';


const Button = ({text, style, onClick}) => {
    const dispatch = useDispatch();

    return (
        <button className="btn" onClick={onClick} style={style}>{text}</button>
    )
}

export default Button
