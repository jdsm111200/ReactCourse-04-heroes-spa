import React from "react";
import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
  user: null,
};
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState, init);
  const onLogin = (name, email, password, remember) => {
    const action = {
      type: types.login,
      payload: {
        name,
        email,
      },
    };
    localStorage.setItem("user", JSON.stringify(action.payload));
    authDispatch(action);
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    authDispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, login: onLogin, logout: onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
