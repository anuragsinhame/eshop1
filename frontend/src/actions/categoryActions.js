import axios from "axios";
import {
  CATEGORY_DATA_FAIL,
  CATEGORY_DATA_REQUEST,
  CATEGORY_DATA_SUCCESS,
} from "../constants/categoryConstants";

const API_URL = process.env.REACT_APP_API_URL;

export const getCategoryProducts = (catId, subCatId) => async (dispatch) => {
  dispatch({ type: CATEGORY_DATA_REQUEST, payload: { catId, subCatId } });
  try {
    let productsRes = {};
    if (subCatId) {
      console.log("Getting cat/subcat data from db");
      productsRes = await axios(
        `${API_URL}/api/products/category/${catId}/subCategory/${subCatId}`
      );
    } else {
      console.log("Getting cat data from db");
      productsRes = await axios(`${API_URL}/api/products/category/${catId}`);
    }
    const { data } = productsRes;
    const categoryProducts = data.products;
    dispatch({ type: CATEGORY_DATA_SUCCESS, payload: categoryProducts });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_DATA_FAIL, payload: message });
  }
};
