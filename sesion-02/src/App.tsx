import React from 'react'
import Header from './components/header'
import Boton from './components/Boton'
import ContadorBasico from './components/ContadorBasico'
import FormularioLogin from './components/FormularioLogin'

const App = () => {
  return (
    <>
      <Header />
      <div>Hola mundo</div>
      <Boton texto="Click me!" tipo="primario" onClick={() => alert('Botón clickeado')} />
      <Boton texto="Eliminar" tipo="peligro" onClick={() => alert('Botón de peligro clickeado')} />
      <Boton texto="Guardar" tipo="secundario" onClick={() => alert('Botón secundario clickeado')} />
      <div>
      <ContadorBasico/>
      </div>
      <div>
        <FormularioLogin/>
      </div>
    </>
  )
}

export default App