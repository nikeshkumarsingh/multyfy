import { useReducer } from "react";
import { createContext, useState } from "react";
export const AuthContext = createContext();

const initstate = {
  isAuth: false,
  token: null,
  productid: [],
};
const authreducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    case "ADD_ITEM": {
      return {
        ...state,
        productid: [action.productid],
      };
    }
    default: {
      return state;
    }
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authreducer, initstate);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
