import axios from "axios";

import {
  SET_ADMIN_PAGE,
  SET_NON_ADMIN_PAGE,
  STORE_DATA_FAIL,
  STORE_DATA_REQUEST,
  STORE_DATA_SUCCESS,
} from "../constants/storeConstants";

const API_URL = process.env.REACT_APP_API_URL;

export const setAdmin = () => (dispatch) => {
  dispatch({ type: SET_ADMIN_PAGE });
};

export const setNonAdmin = () => (dispatch) => {
  dispatch({ type: SET_NON_ADMIN_PAGE });
};

export const StoreData = () => async (dispatch) => {
  dispatch({ type: STORE_DATA_REQUEST });
  try {
    const { data } = await axios.get(`${API_URL}/api/store/all`);
    dispatch({ type: STORE_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STORE_DATA_FAIL, payload: error.message });
  }
};
