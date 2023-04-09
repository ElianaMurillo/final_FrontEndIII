import { createContext, useMemo, useState } from "react";

export const initialState = {theme: "light", info: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(initialState.theme)
  const [info, setInfo] = useState(initialState.info)
  const anotherInfo = useMemo(()=>{
    const getDentists = async() => {
      let infoFetched = await fetch('https://jsonplaceholder.typicode.com/users')
      infoFetched = await infoFetched.json()
      return(infoFetched)
    }
    localStorage.setItem('favoritesDentists', JSON.stringify(info))
    return {getDentists, theme, info, setTheme, setInfo}
  }, [theme, info])

  return (
    <ContextGlobal.Provider value={anotherInfo}>
      {children}
    </ContextGlobal.Provider>
  );
};