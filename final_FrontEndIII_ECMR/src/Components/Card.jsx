import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {info, setInfo} = useContext(ContextGlobal)

  const addFav = (dentistName, dentistUserName, dentistId)=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    if (info.filter(dentist => dentist.id === dentistId).length > 0) {
      setInfo((previousState) => previousState.filter(dentist => dentist.id !== dentistId))
      return
    }
    setInfo((previousState) => 
      previousState.length === 0 ?  [{name: dentistName, username: dentistUserName, id: dentistId}] : 
      [...previousState, {name: dentistName, username: dentistUserName, id: dentistId}]
    )
  }
  
  return (
    <div className="card">
      <Link to = {`dentist/${id}`}>
        <img className="imageDentist" src="../../../images/doctor.jpg" alt="doctor image"></img>
        {/* En cada card deberan mostrar en name - username y el id */}
        <h1>{name}</h1>
        <h2>{username}</h2>
        <h3>{id}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
        <button onClick={() => addFav(name, username, id)} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
