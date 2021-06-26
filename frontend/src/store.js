import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { categoryProductsDataReducer } from "./reducers/categoryReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

// import data from "./data";
import {
  productDetailsReducer,
  productReducers,
} from "./reducers/productReducers";
import { setAdminReducer, StoreDataReducer } from "./reducers/storeReducers";
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "COD",
  },
};
// const reducer = (state, action) => {
//   return { products: data.products }; //new state is returned
// };

const reducer = combineReducers({
  productList: productReducers,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  categoryProductData: categoryProductsDataReducer,
  adminPageStatus: setAdminReducer,
  storeData: StoreDataReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
