import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

//reducer is a func and initialState is our default state and children is our second Argoman
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// we will imp reducer in a diff file

//pull information from the data layer to use it in varius components
export const useStateValue = () => useContext(StateContext);
// with use context we acces to data
