import {
  SET_ADMIN_PAGE,
  SET_NON_ADMIN_PAGE,
  STORE_DATA_REQUEST,
  STORE_DATA_SUCCESS,
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

export const StoreDataReducer = (
  state = { StoreName: "Etawahshop", PinCodes: ["206001"] },
  action
) => {
  switch (action.type) {
    case STORE_DATA_REQUEST:
      return state;
    case STORE_DATA_SUCCESS:
      const storeName = action.payload.response.filter(
        (storeProperty) => storeProperty.property === "StoreName"
      )[0].value;
      const pinCodesObj = action.payload.response.filter(
        (storeProperty) => storeProperty.property === "PinCode"
      );
      const pinCodes = pinCodesObj.map((pinCode) => pinCode.value);
      return { StoreName: storeName, PinCodes: pinCodes };
    default:
      return state;
  }
};
