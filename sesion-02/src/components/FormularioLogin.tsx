import React, { useState } from 'react'
//crear un formulario login que tenga 2 elementos, login y password tenemos que validar que el email es correcto que el password tiene minimo 6 caracteres un boton para mostrra u oculotar la contraseña y mostrar mensajes de error personalizados

interface Credenciales {
    email: string;
    password: string;
}



const FormularioLogin = () => {
//hooks
const [credenciales, setCredenciales] = useState<Credenciales>({
    email: '',
    password: '' 
})
const [showPassword, setShowPassword] = useState(false)

const [errores, setErrores] = useState("");
//efectos

//funciones
function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
}
function handleChangeEmail(e: React.FormEvent) {
    setCredenciales({...credenciales, email: e.target.value})
}

const validarFormulario = (): boolean => {
    if (!credenciales.email.trim()) {
        setErrores("El email es requerido");
        return false;
    }
    if (!credenciales.password.trim()) {
        setErrores("La contraseña es requerida");
        return false;
    }
    if (credenciales.password.length < 6) {
        setErrores("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    setErrores("");
    return true;
}
//renderizado del componente
  return (
    <>
        <div className='max-w-md mx-auto p-6 bg-amber-50 rounded-lg shadow'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Iniciar Sesion</h2>
        </div>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
            <label className='block text-sm font-medium mb-1'>
                Email:
            </label>
            <input
                className='w-full px-3 border rounded focus:outline-none focus:ring-2' 
                type="email"
                value={credenciales.email}
                placeholder='tu@email.com'
                onChange={(e)=> setCredenciales({...credenciales, email: e.target.value})}
                >
            </input>
            </div>
            <div>
            <label className='block text-sm font-medium mb-1'>
                Email:
            </label>
            <input
                className='w-full px-3 border rounded focus:outline-none focus:ring-2' 
                type="email"
                value={credenciales.password}
                placeholder='password'
                onChange={(e)=> setCredenciales({...credenciales, password: e.target.value})}
                >
            </input>
            </div>
        </form>
        <div className='mt-6 mb-6 p-4 bg-amber-100 rounded'>

        </div>
    </>
  )
}

export default FormularioLogin