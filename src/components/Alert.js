import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'


const Alert = () => {
    const alert = useSelector(state => state.alert.alert)

    return (
        <motion.div className="alert"
        initial={{y: '-100vh'}}
        animate={{y:0}}
        transition={{duration: 1, type: 'spring'}}
        >
            <p>{alert}</p>
        </motion.div>
    )
}

export default Alert
