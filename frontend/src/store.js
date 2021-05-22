import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import data from "./data";
import {
  productDetailsReducer,
  productReducers,
} from "./reducers/productReducers";

const initialState = {};
// const reducer = (state, action) => {
//   return { products: data.products }; //new state is returned
// };

const reducer = combineReducers({
  productList: productReducers,
  productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
