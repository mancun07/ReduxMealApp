import Meals from './Meals'
import SearchForm from './SearchForm'
import Alert from './Alert'
import Loader from './Loader'
import {useSelector} from 'react-redux'


const Home = () => {
    const alert = useSelector(state => state.alert.alert)
    const loading = useSelector(state => state.meal.loading)
    console.log(loading)

    return (
        <>
            {alert && <Alert/>}
            <SearchForm/>
            {loading ? <Loader/> : <Meals/>}
        </>
    )
}

export default Home
