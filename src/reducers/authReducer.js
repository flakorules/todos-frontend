import { types } from "../types/types";

const initialState = {
  userId: null,
  userName: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...action.payload,
      };

    case types.authLogout:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
