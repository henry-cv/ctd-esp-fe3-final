/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const initialState = { theme: "", data: [] }

//export const ContextGlobal = createContext(undefined);
export const ContextGlobal = createContext();

const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("");
  const changeTheme = () => theme === "" ? setTheme("dark") : setTheme("")

  return (
    <ContextGlobal.Provider value={{ theme, setTheme, changeTheme }
    }>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;
export const useContextGlobal = () => useContext(ContextGlobal);