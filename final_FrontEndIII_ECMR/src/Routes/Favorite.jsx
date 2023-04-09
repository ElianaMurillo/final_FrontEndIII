import React, { useContext } from "react";
import Card from "../Components/Card"
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favorites = () => {

  const {setTheme, theme} = useContext(ContextGlobal)
  const {info} = useContext(ContextGlobal)
  console.log("test", info)

  return (
    <>
      <h1 className={ theme == 'dark' ? 'dark' : 'light'}>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {info.map((dentist) => {
          return(
            <Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}/>
          )
        })}
      </div>
    </>
  );
};

export default Favorites;