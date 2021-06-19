import {
  SET_ADMIN_PAGE,
  SET_NON_ADMIN_PAGE,
} from "../constants/storeConstants";

export const setAdmin = () => (dispatch) => {
  dispatch({ type: SET_ADMIN_PAGE });
};

export const setNonAdmin = () => (dispatch) => {
  dispatch({ type: SET_NON_ADMIN_PAGE });
};
