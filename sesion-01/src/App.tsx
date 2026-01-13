import React from 'react'
import Header from './components/header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'

const App = () => {
  return (
    <>
    <Header />
    <Saludo nombre="Diego" edad={25}/>
    <Saludo />
    <Saludo nombre="Juan" edad={30}/>
    <div className='mt-8 grid grid-cols1 md:grid-cols2 lg:grid-cols4 gap-6'>
      <Tarjeta
        titulo="Aprendiendo React"
        descripcion="React es una librería de JavaScript para construir interfaces de usuario."
        urlImage="https://reactjs.org/logo-og.png"
        favorite={true}
      />
      <Tarjeta
        titulo="Aprendiendo TypeScript"
        descripcion="TypeScript es un superconjunto de JavaScript que añade tipado estático."
        urlImage="https://www.typescriptlang.org/images/branding/logo-grouping.svg"
      />
      <Tarjeta
        titulo="Aprendiendo Tailwind CSS"
        descripcion="Tailwind CSS es un framework de CSS utilitario para construir diseños personalizados."
        favorite={true}
      />
      <Tarjeta
        titulo="Aprendiendo Vite"
        descripcion="Vite es una herramienta de construcción rápida para proyectos web modernos."
        urlImage="https://vitejs.dev/logo-with-shadow.png"
      />
    </div>
    </>
  )
}

export default App