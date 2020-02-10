import React, { createContext, useContext, useReducer } from "react";
import { initialState} from './initialState'
import { reducer} from './reducer'

const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
