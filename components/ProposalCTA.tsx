


import Link from "next/link"
import Image from "next/image"

export const ProposalCTA = () => {
    return (
        <section className="py-24 gradient-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <Image 
                            src="/logo-sin-bg.png" 
                            alt="Mercuri3P" 
                            width={170} 
                            height={170}
                            className=""
                        />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        ¿Listo para transformar tu negocio?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Descubre nuestra propuesta personalizada y cómo podemos impulsar 
                        tu empresa hacia el siguiente nivel con nuestras soluciones innovadoras.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/proposal">
                            <button className="btn-primary px-8 py-4 text-lg">
                                Ver Propuesta Completa
                            </button>
                        </Link>
                        <Link href="/contact-us">
                            <button className="btn-secondary px-8 py-4 text-lg">
                                Contactar Ahora
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}