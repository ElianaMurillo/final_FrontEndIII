import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Dentist = () => {
 
  const {setTheme, theme} = useContext(ContextGlobal)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [infoDentist, setInfoDentists] = useState({})
  const dataDentists = useParams()

  const getInfoDentist = async() => {
    let info = await fetch('https://jsonplaceholder.typicode.com/users/' + dataDentists.id)
      info = await info.json()
    setInfoDentists(info)
  }

  useEffect(() => {
    getInfoDentist()
  }, [])
  
  return (
    <>
      <h1 className={ theme == 'dark' ? 'dark' : 'light'}>Detalle dentista: {infoDentist.name}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table className={ theme == 'dark' ? 'dark' : 'light'}>
        <thead>
          <tr>
            <th scope="row">Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{infoDentist.name}</td>
            <td>{infoDentist.email}</td>
            <td>{infoDentist.phone}</td>
            <td>{infoDentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Dentist