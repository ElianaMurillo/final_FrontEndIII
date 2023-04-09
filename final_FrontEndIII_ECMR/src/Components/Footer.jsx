import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  
  const {setTheme, theme} = useContext(ContextGlobal)
  
  return (
    <footer className={ theme == 'dark' ? 'dark' : 'light'}>
        <p>Powered by</p>
        <img src="../../../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
