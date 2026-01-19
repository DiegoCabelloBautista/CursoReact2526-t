import React from 'react'
//Crear un componente llamado boton al que le pase 3 props que son : texto que tendra el boton, tipo de boton (primario, secundario o peligro) y tercero la action Onclick, si el boton es primario sera de color azul 500 y cuando me ponga encima sera un azul 700, si es secundario sera gris 500 y al ponerme encima gris 700, si es peligro sera rojo 500 y al ponerme encima rojo 700. Todos letra blanca
type tipoBoton = 'primario' | 'secundario' | 'peligro';
interface BotonProps {
    texto: string;
    tipo: tipoBoton;
    onClick: () => void;
}

const Boton = ({ texto, tipo, onClick }: BotonProps) => {
  const colores = {
    primario: 'bg-blue-500 hover:bg-blue-700',
    secundario: 'bg-gray-500 hover:bg-gray-700',
    peligro: 'bg-red-500 hover:bg-red-700'
  }

  return (
    <button 
    onClick={onClick}
    className={`px-4 py-2 rounded font-semibold transition ${colores[tipo]}`}>
      {texto}
    </button>
  )
}

export default Boton