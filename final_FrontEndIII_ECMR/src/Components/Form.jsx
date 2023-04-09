import React from "react";


const Form = ({nombre, correo}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  return (
    <div>
      <form>
        <p>Gracias {nombre} te estaremos contactando mas adelante via email.</p>
      </form>
    </div>
  );
};

export default Form;
