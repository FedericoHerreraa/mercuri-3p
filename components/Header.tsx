
import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-26">
                    <Image src="/logo-mercuri.png" alt="Mercuri3P" width={100} height={100} />
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</Link>
                        <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</Link>
                        <Link href="/success-cases" className="text-gray-600 hover:text-blue-600 transition-colors">Casos de éxito</Link>
                        <Link href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</Link>
                    </div>
                    <button className="btn-primary">Contactar</button>
                </div>
            </div>
        </nav>
    )
}