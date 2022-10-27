import { types } from "../types/types";

const initialState = {
  logged: false,
  user: null, // user: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: action.payload,
        logged: true,
      };
    case types.logout:
      return {
        initialState,
      };
    default:
      return state;
  }
};
