
import {useSelector} from 'react-redux'

const Alert = () => {
    const alert = useSelector(state => state.alert.alert)

    return (
        <div className="alert">
            <p>{alert}</p>
        </div>
    )
}

export default Alert
