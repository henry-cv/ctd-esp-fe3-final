/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
//export const initialState = { theme: "light", data: [] }
export const initialState = { theme: "light", data: [] }
console.log("valor de Initial State");
console.log(initialState);

//export const ContextGlobal = createContext(undefined);
export const ContextGlobal = createContext();

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  /* const [theme, setTheme] = useState(() => {
    const defaultTheme = localStorage.getItem("theme");
    return defaultTheme || "light";
  });
  const [favs, setFavs] = useState(() => {
    const favList = JSON.parse(localStorage.getItem("favourites"));
    console.log("favList dentro de contexto useState Favs");
    console.log(favList);
    return favList || [];
  });
  const changeTheme = () => setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light"); */
  /* useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme]) */
  /* return (
    <ContextGlobal.Provider value={{ theme, setTheme, changeTheme, favs, setFavs }
    }>
      {children}
    </ContextGlobal.Provider>
  ); */
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