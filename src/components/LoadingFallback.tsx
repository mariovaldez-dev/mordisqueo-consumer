import loaderImage from '../assets/images/mordisqueosmall.svg';

export const Loading = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-zinc-900 z-50 fixed top-0 left-0  p-4 transition-colors duration-300">
            {/* Circle loading */}
            <div className="flex flex-col w-auto items-center justify-center rounded-full dark:bg-zinc-800 shadow-xl shadow-purple-200 dark:shadow-none border border-purple-100 dark:border-white/10 z-50 transition-colors duration-300">
                <img
                    src={loaderImage}
                    alt="Cargando..."
                    className="w-32 h-32 animate-spin rounded-full"
                />
            </div>
            <h1 className="mt-8 text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Cargando...
            </h1>
        </div>
    )
}