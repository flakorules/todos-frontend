import { types } from "../types/types";

const initialState = {
  flagShowLoading: false,
};

export const uiReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case types.setFlagShowLoading:
        console.log(action);  
      return {
        ...state,
        flagShowLoading: action.payload,
      };

    default:
      return state;
  }
};
