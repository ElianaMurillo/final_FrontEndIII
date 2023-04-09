import Form from '../Components/Form'
import React, { useState, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

    const {setTheme, theme} = useContext(ContextGlobal)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const [mensajeAlerta, setMensajeAlerta] = useState("")
    const [mostrarForm, setMostrarForm] = useState(false)


    const handleChangeNombre = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value)
    }

    const handleSubmitUsuario = (event) => {
        event.preventDefault()
        if (nombre.length <= 3 || nombre[0] === " ") {
            setMostrarAlerta(true)
            setMensajeAlerta("Por favor chequea que la información sea correcta.")
            return
        }

        setMostrarForm(true)
    }

    const borrarAlerta = () => {
        setMostrarAlerta(false)
        setMensajeAlerta("")
        setNombre("")
        setCorreo("")
    }

  return (
    <div className={ theme == 'dark' ? 'dark' : 'light'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

      <form onSubmit={handleSubmitUsuario} >
      <div className="contenedor">

          <div className="contenedorInput">
              <label htmlFor="nombre">Ingrese su nombre:&nbsp;</label>
              <input className="input" name="nombre" type="text" onChange={handleChangeNombre} value={nombre} />
          </div>
          
          <div className="contenedorInput">
              <label htmlFor="correo">Ingrese su correo:&nbsp;</label>
              <input className="input" name="correo" type="email" onChange={handleChangeCorreo} value={correo} />
          </div>
          
          <input type="submit" value="Enviar" />

      </div>

      {mostrarAlerta && (
          <dialog className="mensajeAlerta" open>
          {mensajeAlerta}
          <button className="boton" onClick={() => borrarAlerta()}>&#10005;</button>
      </dialog>
      )}


      {mostrarForm && <Form nombre={nombre} correo={correo}/>}
      </form>
    </div>

  )
}

export default Contact