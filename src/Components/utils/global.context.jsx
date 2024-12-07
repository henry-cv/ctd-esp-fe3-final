/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
//export const initialState = { theme: "light", data: [] }
const storedTheme = localStorage.getItem("theme");
const favourites = JSON.parse(localStorage.getItem("favourites"));
export const initialState = { theme: storedTheme || "light", data: favourites || [] }

//export const ContextGlobal = createContext(undefined);
export const ContextGlobal = createContext();

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // Agregando código para usar useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  )

};
export default Context;
export const useContextGlobal = () => useContext(ContextGlobal);