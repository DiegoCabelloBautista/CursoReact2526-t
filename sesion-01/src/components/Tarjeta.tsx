import React from 'react'

interface TarjetaProps {
    titulo : string;
    descripcion : string;
    urlImage?: string;
    favorite?: boolean;
}
//Tarjeta renderiza o simula una card donde si la tarjeta tiene la propiedad favorite, tendra un estilo especial y una estrella de favorita. En caso contrario no tendra ese estilo

const Tarjeta = ({ titulo, descripcion, urlImage, favorite=false}: TarjetaProps) => {
            //Rendreizado condicional...
    return (
    <div className={`p-6 rounded-lg shadow-md ${favorite ? "bg-amber-200 border-2 border-amber-700" : "bg-white"}`}>
        {urlImage && (
            <img src={urlImage} alt={titulo} className='w-full h-48 object-cover rounded-md mb-4' />
        )}
        <h3 className='text-xl font-bold mb-2'>{titulo}</h3>
        <p className='text-gray-600'>{descripcion}</p>
        {favorite && (
            <span className=' text-2xl text-red-500'>⭐</span>
        )}
    </div>
  )
}

export default Tarjeta;

