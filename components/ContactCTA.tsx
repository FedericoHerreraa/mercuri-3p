import Link from "next/link";

export const ContactCTA = () => {
    return (
        <section className="py-24 gradient-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        ¿Listo para Transformar tu Producto?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Iniciemos una conversación sobre cómo podemos desarrollar productos sustentables 
                        que impulsen tu negocio hacia el futuro. Nuestro equipo está listo para escuchar tu visión.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-gray-900">Email</p>
                                <p className="text-gray-600">hola@mercuri3p.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-gray-900">Teléfono</p>
                                <p className="text-gray-600">+54 (11) 1234-5678</p>
                            </div>
                        </div>
                    </div>
                    <Link href="/contact-us">
                        <button className="btn-primary cursor-pointer text-lg px-8 py-4">
                            Contactarnos Ahora
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
