/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] }

//export const ContextGlobal = createContext(undefined);
export const ContextGlobal = createContext();

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(() => {
    const defaultTheme = localStorage.getItem("theme");
    return defaultTheme || "light";
  });
  const [favs, setFavs] = useState(() => {
    const favList = JSON.parse(localStorage.getItem("favourites"));
    console.log("favList dentro de contexto useState Favs");
    console.log(favList);
    return favList || [];
  });
  const changeTheme = () => setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ContextGlobal.Provider value={{ theme, setTheme, changeTheme, favs, setFavs }
    }>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;
export const useContextGlobal = () => useContext(ContextGlobal);