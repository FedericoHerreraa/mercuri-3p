
import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-26">
                    <Link href="/">
                        <Image src="/logo-sin-bg.png" alt="Mercuri3P" width={120} height={120} />
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-[#0069c0] transition-colors">Inicio</Link>
                        <Link href="/#services" className="text-gray-600 hover:text-[#0069c0] transition-colors">Servicios</Link>
                        <Link href="/proposal" className="text-gray-600 hover:text-[#0069c0] transition-colors">Propuesta</Link>
                        <Link href="/success-cases" className="text-gray-600 hover:text-[#0069c0] transition-colors">Casos de éxito</Link>
                        <Link href="/contact-us" className="text-gray-600 hover:text-[#0069c0] transition-colors">Contacto</Link>
                    </div>
                    <Link href="/contact-us">
                        <button className="btn-primary cursor-pointer">Cotización Gratuita</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}