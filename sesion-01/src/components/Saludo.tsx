//crear un componente llamado saludo que renderice nombre y edad que se pasan como props al componente
import React from 'react'
interface SaludoProps{
    nombre: string;
    edad: number;
}
const Saludo = ({ nombre="Anonimo", edad=0 }: SaludoProps) => {
  return (
    <div className='bg-amber-200 p-4 rounded-lg shadow mb-5'>
      <h2 className='text-xl font-semibold'>Hola, {nombre}</h2>
      <p className='text-gray-700'>tienes {edad} años</p>
    </div>
  )
}

export default Saludo