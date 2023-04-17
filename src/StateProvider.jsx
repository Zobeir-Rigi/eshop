import React, { createContext, useContext, useReducer } from "react";

// prepers the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer to use it in varius components
export const useStateValue = () => useContext(StateContext);