import {
  SET_ADMIN_PAGE,
  SET_NON_ADMIN_PAGE,
} from "../constants/storeConstants";

export const setAdminReducer = (state = { isAdmin: false }, action) => {
  switch (action.type) {
    case SET_ADMIN_PAGE:
      return { isAdminPage: true };
    case SET_NON_ADMIN_PAGE:
      return { isAdminPage: false };
    default:
      return state;
  }
};
