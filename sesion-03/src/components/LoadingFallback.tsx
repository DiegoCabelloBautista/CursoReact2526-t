interface LoadingFallbackProps {
    message?: string;
}


const LoadingFallback = ({ message = "Cargando datos..." }: LoadingFallbackProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900">

                </div>
                <p className="text-lg font-medium text-gray-600">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default LoadingFallback;