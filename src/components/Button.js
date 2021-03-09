import PropTypes from 'prop-types';

const Button = ({text, style, onClick}) => {

    return (
        <button className="btn" onClick={onClick} style={style}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}

export default Button
