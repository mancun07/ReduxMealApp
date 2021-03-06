export const toggleMenu = () => dispatch => {
    dispatch({type: 'TOGGLE_MENU'})   
}


export const changeNavbarColor = () => dispatch => {
    console.log('Hello from changeNavbarColor')
    dispatch({type: 'CHANGE_NAVBAR_COLOR'})   
}

