const initialState = {
    menuIsOpened: false
}


function NavbarReducer(state = initialState, action) {
    switch (action.type) {

      case 'TOGGLE_MENU':
        return {
          ...state,
          menuIsOpened: !state.menuIsOpened
        } 
    
      default:
        return state
    }
  }

  export default NavbarReducer;