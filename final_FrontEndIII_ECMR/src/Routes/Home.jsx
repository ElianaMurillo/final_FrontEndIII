import React, { useState, useEffect, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {setTheme, theme} = useContext(ContextGlobal)
  const [dentists, setDentists] = useState([])

  const getDentists = async() => {
    const info = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      //console.log("Esta es la rta: ", response)
      return response.json()
    })
    setDentists(info)
  } 

  useEffect(() => {
    getDentists()
  }, [])

  return (
    <main className={ theme == 'dark' ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => {
          return(
            //<p>{dentists.name}</p>)
            <Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username}/>
          )
        })}
      </div>
    </main>
  )
}

export default Home