const initialState = {
    menuIsOpened: false,
    basicNavbarColor: true
}


function NavbarReducer(state = initialState, action) {
    switch (action.type) {

      case 'TOGGLE_MENU':
        return {
          ...state,
          menuIsOpened: !state.menuIsOpened
        } 

      case 'CHANGE_NAVBAR_COLOR':
        return {
          ...state,
          basicNavbarColor: !state.basicNavbarColor
        } 
    
      default:
        return state
    }
  }

  export default NavbarReducer;