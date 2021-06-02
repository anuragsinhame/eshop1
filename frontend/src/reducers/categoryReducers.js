import {
  CATEGORY_DATA_FAIL,
  CATEGORY_DATA_REQUEST,
  CATEGORY_DATA_SUCCESS,
} from "../constants/categoryConstants";

export const categoryProductsDataReducer = (
  state = { categoryProducts: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_DATA_REQUEST:
      console.log("Cate Reducer");
      return { loading: true };
    case CATEGORY_DATA_SUCCESS:
      console.log("Cate Reducer1");
      return { loading: false, categoryProducts: action.payload };
    case CATEGORY_DATA_FAIL:
      console.log("Cate Reducer2");
      return { loading: false, error: action.payload };
    default:
      console.log("Cate Reducer3");
      return state;
  }
};
