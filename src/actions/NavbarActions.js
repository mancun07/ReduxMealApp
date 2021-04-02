import { TOGGLE_MENU, CHANGE_NAVBAR_COLOR } from "./types";

export const toggleMenu = () => (dispatch) => {
  dispatch({ type: TOGGLE_MENU });
};

export const changeNavbarColor = () => (dispatch) => {
  dispatch({ type: CHANGE_NAVBAR_COLOR });
};
