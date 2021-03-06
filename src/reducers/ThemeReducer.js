const initialState = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }


  function ThemeReducer(state = initialState, action) {
    switch (action.type) {


    
      default:
        return state
    }
  }

  export default ThemeReducer;

