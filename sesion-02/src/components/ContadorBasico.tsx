import React, { useState } from 'react'
import Boton from './Boton'
// Se pide un contador basico que cada vez que pulsemos un boton aumente o disminuya el contador con 2 botones
const ContadorBasico = () => {
//hook
const [count, setCount] = useState(0)
//efectos

//funciones

//renderizado del componente
  return (
    <div className='p-6 bg-white rounded-lg shadow'>
      <h3 className='text-lg font-semibold mb-4'>
        Contador: {count}
      </h3>
      <div className='flex gap-2'>
        <Boton texto="Incrementar" tipo="primario" onClick={() => setCount(count + 1)} />
        <Boton texto="Decrementar" tipo="secundario" onClick={() => setCount(count - 1)} />
        <Boton texto="Incrementar" tipo="primario" onClick={() => setCount(count + 10)} />
        <Boton texto="Decrementar" tipo="secundario" onClick={() => setCount(count - 10)} />
        <Boton texto="Resetear" tipo="peligro" onClick={() => setCount(0)} />
      </div>
    </div>
  )
}

export default ContadorBasico